"use client";
import React from "react";
import Image from "next/image";

import { useAccount, useConnect, useDisconnect } from "wagmi";

const WalletButton = () => {
  const { isConnected } = useAccount();
  const { connect, connectors, isLoading } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="shadow-cb rounded-15 bg-white flex mt-[10px] gap-[13px] w-[200px] h-[49px] items-start"
      onClick={!isLoading && isConnected ? () => { disconnect(); } : () => { connect({ connector: connectors[0] }); }}
    >
      <Image
        className='w-[21px] h-[21px] ml-6 mt-[14px]'
        src="/wallet-icon.svg"
        alt=''
        width={21}
        height={21}
      />
      <p className="font-medium leading-[21px] text-[16px] mt-[15px]">
        {isLoading ? "Connecting" : isConnected ? "Connected" : "Connect Wallet"}
      </p>
    </div>
  );
};

export default WalletButton;