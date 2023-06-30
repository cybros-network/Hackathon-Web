"use client";

import React from "react";
import {
  GITHUB_URL,
  ON_POLKADOT_URL,
  demoAIGCCardsCollection,
  dm_mono_font,
} from "@/constants";
import { AIGCCard } from "@/components";
import { AIGCCardProps } from "@/types";
import Image from "next/image";

function AigcPage() {
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
        <div className="shadow-cb rounded-15 bg-white flex mt-[10px] gap-[13px] w-[200px] items-start">
          <Image
            className="w-[21px] h-[21px] ml-6 mt-[14px]"
            src="/wallet-icon.svg"
            alt=""
            width={21}
            height={21}
          />
          <p className="font-medium leading-[21px] text-[16px] mt-[15px]">
            Connect Wallet
          </p>
        </div>
      </header>

      <div className="flex flex-col justify-start gap-[6px] mx-[84px] mt-[42px] h-[142px] text-cb-value text-[14px] leading-[17px] bg-white/[0.72] shadow-cb rounded-15">
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

      <div className="flex flex-col mx-[84px] mt-[21px] gap-[18px] bg-white/[0.72] shadow-cb rounded-15">
        <div className="flex justify-between items-start ml-[39px] mr-[42px] mt-[27px]">
          <div className="text-[21px] font-medium leading-[25.41px]">
            Generate
          </div>
          <div className="font-medium text-[15px] leading-[29px] text-cb-normal">
            Current queued jobs: 3
          </div>
        </div>
        <div
          className={`${dm_mono_font.className} flex rounded-15 h-[90px] mx-[30px] mt-[14px] bg-[#F1F1F1] text-[16px]`}
        >
          <textarea
            className="mt-[18px] mb-[8px] mx-6 w-full border-none outline-none shadow-none text-cb-normal bg-[#F1F1F1] leading-21"
            placeholder="Prompt goes here..."
          ></textarea>
        </div>
        <button className="mx-[24px] mb-9 shadow-entrance-aigc shadow-cb text-entrance-aigc font-medium leading-[21px] rounded-15 bg-white/[0.72] text-[16px] h-[45px] w-[119px]">
          Generate
        </button>
      </div>

      <div className="flex flex-row justify-between mx-[105px] mt-[48px]">
        <p className="text-[27px] font-medium leading-[33px]">Arts</p>
        <label htmlFor="my-checkbox" className="inline-flex items-center">
          <input
            id="my-checkbox"
            type="checkbox"
            className="form-checkbox h-[18px] w-[8px] shadow-cb-normal shadow-cb rounded-[3px]"
          />
          <span className="ml-3 text-cb-value">only show my arts</span>
        </label>
      </div>

      <div className="mx-[84px] mt-7 mb-14 flex flex-wrap gap-[27px]">
        {demoAIGCCardsCollection.map((props: AIGCCardProps) => {
          return <AIGCCard key={props.id} {...props} />;
        })}
      </div>
    </div>
  );
}

export default AigcPage;
