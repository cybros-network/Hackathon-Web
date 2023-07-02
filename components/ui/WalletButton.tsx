"use client";
import React, { useMemo } from "react";
import Image from "next/image";

import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";

const WalletButton = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors, isLoading } = useConnect();
  const { data: balance } = useBalance({ address, watch: true });
  const { disconnect } = useDisconnect();

  const shortAddress = useMemo(() => {
    if (!address) return "";
    return address.slice(0, 5) + "..." + address.slice(-4);
  }, [address]);

  const WalletTitle = () => {
    if (isLoading) {
      return "Connecting";
    } else if (!isConnected) {
      return "Connect Wallet";
    } else {
      return `${shortAddress} | ${
        balance
          ? parseFloat(balance.formatted).toFixed(4) + " " + balance.symbol
          : "--"
      }`;
    }
  };

  return (
    <div
      className="shadow-cb rounded-15 bg-white flex mt-[10px] gap-[13px] h-[49px] items-start"
      onClick={
        !isLoading && isConnected
          ? () => {
              disconnect();
            }
          : () => {
              connect({ connector: connectors[0] });
            }
      }
    >
      <Image
        className="w-[21px] h-[21px] ml-6 mt-[14px]"
        src="/wallet-icon.svg"
        alt=""
        width={21}
        height={21}
      />
      <p className="font-medium leading-[21px] text-[16px] mt-[15px] mr-[25px]">
        <WalletTitle />
      </p>
    </div>
  );
};

export default WalletButton;
