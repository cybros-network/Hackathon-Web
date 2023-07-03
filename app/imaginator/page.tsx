"use client";

import React from "react";
import { WalletButton } from "@/components";
import Image from "next/image";
import { DC_URL } from "@/constants";
import { useRouter } from "next/navigation";
import ArtList from "@/app/imaginator/List";
import { useAppStatusUpdater } from "@/utils/atoms";
import PromptInput from "@/app/imaginator/PromptInput";

export default function ImaginatorPage() {
  const router = useRouter();
  useAppStatusUpdater();

  return (
    <div className="text-black">
      <header className="flex flex-row justify-between mt-[51px] ml-[42px] mr-[54px] h-[59px] text-cb-value">
        <div
          className="flex items-start gap-[21px]"
          onClick={() => router.push("/")}
        >
          <div className="w-[42px] h-[42px]">
            <Image src="/Logo Solo.svg" alt="" width={42} height={42} />
          </div>
          <div className="text-[24px] leading-[29px] mt-[18px]">
            Cybros | The Imaginator Demo
          </div>
        </div>
        <WalletButton />
      </header>

      <div className="flex flex-col justify-start gap-[6px] mt-[42px] mx-[84px] text-cb-value text-[14px] leading-[17px] bg-white/[0.72] shadow-cb rounded-15">
        <p className="text-[16px] leading-[19px] mx-6 mt-[30px]">
          In this demo:
        </p>
        <div className="mx-9 flex flex-col justify-start mb-9">
          <p>
            • Use your Polygon account to generate arts with AI compute
            power running on Cybros testnet.
            <br />• All generated arts will be sent to the
            <a className="text-[#fa2dff]" href={DC_URL} target="_blank">
              {" "}
              #demo-arts{" "}
            </a>
            channel in
            <a className="text-[#fa2dff]" href={DC_URL} target="_blank">
              {" "}
              our Discord server
            </a>
            , and the ❤️ reaction will be represented on on-chain data of
            the testnet.
            <br />• Mint ERC-721 NFT with your generated arts so you can
            check it out on Opensea.
          </p>
        </div>
      </div>
      <div className="mt-[21px] mx-[84px]">
        <PromptInput />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[1346px] ">
          <ArtList />
        </div>
      </div>
    </div>
  );
}
