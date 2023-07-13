import { NodeSSH } from "node-ssh";
import PQueue from "p-queue";
import express from "express";

const sshExecQueue = new PQueue({ concurrency: 1 });
const coffeeQueue = new PQueue({ concurrency: 1 });

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));

const state = {
  mbstate1: [],
  mbstate2: [],
  isIdle: false,
  isMaintenance: true,
};

async function watchState(ssh) {
  while (true) {
    const mbstate1 = (
      await sshExecQueue.add(() =>
        ssh.execCommand("cat /sys/class/gpio/mbstate1/value")
      )
    ).stdout;
    const mbstate2 = (
      await sshExecQueue.add(() =>
        ssh.execCommand("cat /sys/class/gpio/mbstate2/value")
      )
    ).stdout;
    state.mbstate1.push(mbstate1);
    state.mbstate2.push(mbstate2);
    if (state.mbstate1.length > 8) {
      state.mbstate1.shift();
    }
    if (state.mbstate2.length > 3) {
      state.mbstate2.shift();
    }
    state.isIdle = state.mbstate1.includes("0");
    state.isMaintenance = state.mbstate2.includes("0");
    // console.log(state);
    await wait(50);
  }
}

async function makeCoffee(ssh) {
  await sshExecQueue.add(() =>
    ssh.execCommand("echo 0 > /sys/class/gpio/mbpwr1/value")
  );
  await wait(800);
  await sshExecQueue.add(() =>
    ssh.execCommand("echo 1 > /sys/class/gpio/mbpwr1/value")
  );
  await wait(800);
  await sshExecQueue.add(() =>
    ssh.execCommand("echo 0 > /sys/class/gpio/mbpwr1/value")
  );
}

function startWebServer(ssh) {
  const app = express();
  const port = parseInt(process.env.WEB_PORT) || 5666;
  const host = process.env.WEB_HOST || "127.0.0.1";

  app.get("/kohi", (res, req) => {
    req.json(state);
  });

  app.post("/kohi", (res, req) => {
    if (state.isIdle && !state.isMaintenance) {
      coffeeQueue
        .add(() => makeCoffee(ssh))
        .then(() => {
          req.json({ ok: true });
        })
        .catch((e) => {
          console.warn(e);
          req.json({ ok: false, error: e.toString() });
        });
    } else {
      req.json({ ok: false, error: "Coffee machine not ready!" });
    }
  });

  return new Promise((resolve, reject) => {
    try {
      app.listen(port, host, () => {
        console.log(`Started server for coffee machine GPIO on ${host}:${port}!`);
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });
}

async function main() {
  const ssh = new NodeSSH();
  await ssh.connect({
    host: process.env.SSH_HOST || "172.16.0.254",
    port: parseInt(process.env.SSH_PORT) || 22,
    username: process.env.SSH_USERNAME || "root",
    password: process.env.SSH_PASSWORD || "114514",
    timeout: 1000,
  });

  await Promise.all([startWebServer(ssh), watchState(ssh)]);

  console.log("All done, exiting...");
  process.exit(0);
}
main().catch((e) => {
  console.error(e);
  process.exit(255);
});
