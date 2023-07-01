import { ApiPromise, Keyring, WsProvider } from "https://deno.land/x/polkadot/api/mod.ts";
import { cryptoWaitReady } from "https://deno.land/x/polkadot/util-crypto/mod.ts";
import { sleep } from "https://deno.land/x/sleep/mod.ts";

const POOL_ID = 102
const POOL_IMPL_ID = 1

const KEY_QUEUED_SIZE = ["QUEUED_SIZE"];
const KEY_PROCESSED_HEIGHT = ["PROCESSED_HEIGHT"];
const KEY_PREFIX_JOB = ["JOB"];

export default async function indexerLoop(kv, endpoint) {
  await cryptoWaitReady();
  while (true) {
    try {
      console.log("Starting new indexer...");
      await indexerInit(kv, endpoint);
    } catch (error) {
      console.error("indexerLoop:", error);
    }
  }
}

function indexerInit(kv, endpoint) {
  return new Promise((resolve, reject) => {
    const rpcProvider = new WsProvider(endpoint);
    const api = new ApiPromise({
      provider: rpcProvider,
      throwOnConnect: true,
      throwOnUnknown: true,
    });
    api.on("error", (e) => {
      console.error(e);
      reject(e);
    });
    indexer(kv, api).then(() => resolve()).catch((e) => {
      api.disconnect();
      reject(e);
    });
  });
}

async function indexer(kv, api) {
  await api.isReady;
  let targetHeight = (await api.derive.chain.bestNumberFinalized()).toNumber();
  const qProcessedHeight = await kv.get(KEY_PROCESSED_HEIGHT);
  let processedHeight = qProcessedHeight.value || 0;
  while (true) {
    if (targetHeight <= processedHeight) {
      await sleep(1);
      targetHeight = (await api.derive.chain.bestNumberFinalized()).toNumber();
      continue;
    }
    console.log(`Processed #${processedHeight}, target #${targetHeight}`);

    const curr = processedHeight + 1;
    const batch = kv.atomic();
    const jobCache = {}
    const getJob = async (id) => {
      if (jobCache[id]) {
        return jobCache[id]
      }
      const q = await kv.get([...KEY_PREFIX_JOB, id])
      if (!q.value) {
        return null
      }
      jobCache[id] = q.value
      return jobCache[id]
    }

    const hash = await api.rpc.chain.getBlockHash(curr)
    const apiAt = await api.at(hash)
    const events = (await apiAt.query.system.events()).toHuman()

    for (const e of events) {
      if (e.event.section !== 'offchainComputing') continue
      console.log(e.event)
      switch (e.event.method) {
        case 'JobCreated':
          break;
        case 'JobAssigned':
          break;
        case 'JobReleased':
          break;
        case 'JobStatusUpdated':
          break;
        case 'JobResultUpdated':
          break;
        default:
          break;
      }
    }

    batch.set(KEY_PROCESSED_HEIGHT, curr);
    // await batch.commit();
    processedHeight = curr;

    if (targetHeight <= processedHeight) {
      targetHeight = (await api.derive.chain.bestNumberFinalized()).toNumber();
      await kv.set(KEY_QUEUED_SIZE, (await api.query.offchainComputing.assignableJobs.entries(POOL_ID, POOL_IMPL_ID)).length)
    }
  }
}
