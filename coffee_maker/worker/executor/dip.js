import axios from 'https://deno.land/x/redaxios@0.5.1/mod.ts';
import { stringToHex } from "https://deno.land/x/polkadot/util/mod.ts";

const wait = (t) => new Promise(resolve => setTimeout(resolve, t))

export default async function dip() {
  let shouldDip = false
  let okCount = 0

  setTimeout(() => {
    console.log(stringToHex(JSON.stringify({ ok: false, data: "TIMED_OUT", result: "Error" })))
    Deno.exit(255)
  }, 60 * 1000 * 2)

  while (!shouldDip) {
    console.error("okCount", okCount)
    try {
      const res = await axios.get('http://127.0.0.1:5666/kohi')
      if (res.data?.isIdle && !res.data?.isMaintenance) {
        okCount += 1
      }
    } catch (error) {
      okCount = 0
      // can be ignored in this case
    }
    if (okCount >= 12) {
      shouldDip = true
    }
    await wait(300)
  }

  try {
    const res = await axios.post('http://127.0.0.1:5666/kohi')
    if (typeof res.data?.ok === 'boolean') {
      console.log(stringToHex(JSON.stringify({
        data: res.data,
        e2e: false,
        result: res.data.ok ? "Success" : "Error"
      })))
      Deno.exit(res.data.ok ? 0 : 255)
    }
    else {
      throw new Error('Bad coffee machine!')
    }
  } catch (error) {
    throw error
  }
}
