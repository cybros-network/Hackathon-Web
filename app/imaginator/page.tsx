"use client";

import React from "react";
import { WalletButton, AIGCPool, AIGCCreator } from "@/components";
import Image from "next/image";

export default function AIGCPage() {

  return (
    <div className="text-black">
      <header className="flex flex-row justify-between mt-[51px] ml-[42px] mr-[54px] h-[59px] text-cb-value">
        <div className="flex items-start gap-[21px]">
          <div className="w-[42px] h-[42px]">
            <Image src="/Logo Solo.svg" alt="" width={42} height={42} />
          </div>
          <div className="text-[24px] leading-[29px] mt-[18px]">
            AI NFT Render Flow Demo
          </div>
        </div>
        <WalletButton />
      </header>
      <div className="flex flex-col items-center">
        <div className="w-[1346px]">
          <div className="flex flex-col justify-start gap-[6px] mt-[42px] h-[142px] text-cb-value text-[14px] leading-[17px] bg-white/[0.72] shadow-cb rounded-15">
            <p className="text-[16px] leading-[19px] mx-6 mt-[30px]">
              In this demo:
            </p>
            <div className="mx-9 flex flex-col justify-start">
              <p>
                • Use your Polygon account to generate arts with AI compute power
                running on Cybros testnet.
                <br />• All generated arts will be sent to the
                <span className="text-[#fa2dff]"> #demo-arts </span>
                channel in
                <span className="text-[#fa2dff]"> our Discord server</span>
                , and the ❤️ reaction will be represented on on-chain data of the
                testnet.
                <br />• Mint ERC-721 NFT with your generated arts and share it on
                Lens.
              </p>
            </div>
          </div>
          <div className="mt-[21px]">
            <AIGCCreator />
          </div>

          <div className="flex flex-row justify-between mx-[21px] mt-[48px]">
            <p className="text-[27px] font-medium leading-[33px]">Arts</p>
            <label htmlFor="my-checkbox" className="inline-flex items-center">
              <input
                id="my-checkbox"
                type="checkbox"
                className="form-checkbox h-[18px] w-[18px] shadow-cb-normal shadow-cb rounded-[3px]"
              />
              <span className="ml-3 text-cb-value">only show my arts</span>
            </label>
          </div>

          <AIGCPool />
        </div>
      </div>
    </div >
  );
}
