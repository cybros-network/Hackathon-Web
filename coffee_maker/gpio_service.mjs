import { NodeSSH } from "node-ssh";
import PQueue from "p-queue";

const sshExecQueue = new PQueue({ concurrency: 1 });

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));

const state = {
  mbstate1: [],
  mbstate2: [],
  isIdle: false,
  isMaintainance: false,
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
    if (state.mbstate1.length > 5) {
      state.mbstate1.shift();
    }
    if (state.mbstate2.length > 5) {
      state.mbstate2.shift();
    }
    state.isIdle = state.mbstate1.includes("0");
    state.isMaintainance = state.mbstate2.includes("0");
    console.log(state);
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

async function main() {
  const ssh = new NodeSSH();
  await ssh.connect({
    host: process.env.SSH_HOST || "172.16.0.254",
    port: parseInt(process.env.SSH_PORT) || 22,
    username: process.env.SSH_USERNAME || "root",
    password: process.env.SSH_PASSWORD || "114514",
  });

  await Promise.all([watchState(ssh)]);

  console.log("disconnected");
}
main().catch((e) => {
  console.error(e);
  process.exit(255);
});
