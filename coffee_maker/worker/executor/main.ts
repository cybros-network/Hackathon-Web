import dip from './dip.js';
import { stringToHex } from "https://deno.land/x/polkadot/util/mod.ts";

dip().then(() => {
  Deno.exit(0)
}).catch((error) => {
  console.log(stringToHex(JSON.stringify({ ok: false, error: error.toString(), result: "Error" })))
  Deno.exit(255)
})
