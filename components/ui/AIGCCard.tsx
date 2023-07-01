import React from "react";
import { AIGCCardProps } from "@/types";
import Image from "next/image";
import { dm_mono_font } from "@/constants";
import Link from "next/link";

const AIGCCard = ({
  id,
  imageUrl,
  status,
  owner,
  requestHash,
  fancied,
}: AIGCCardProps) => {
  const statusBGColor = (
    status: "Minted" | "Generated" | "Pending" | "Failed" | "Generating"
  ) => {
    switch (status) {
    case "Minted":
      return "#00983D0F";
    case "Generated":
      return "#0083FD0F";
    case "Pending":
      return "#FF6F2D0F";
    case "Failed":
      return "#0000000F";
    case "Generating":
      return "#FB2DFF0F";
    default:
      new Error(`未知的状态: ${status}`);
    }
  };

  const Infobuilder = ({ title, info }: { title: string; info: string }) => {
    return (
      <div className="flex flex-col justify-start gap-[3px]">
        <p className="font-medium text-[16px] leading-21 text-cb-normal">
          {title}
        </p>
        <div className={dm_mono_font.className}>
          <p className="text-[13px] text-cb-value line-clamp-2 h-[34px] leading-[16.93px]">
            {info}
          </p>
        </div>
      </div>
    );
  };

  const ActionArea = ({
    status,
    url,
  }: {
    status: "Minted" | "Generated" | "Pending" | "Failed" | "Generating";
    url: string;
  }) => {
    const canMint = status === "Generated";
    return (
      <div className="flex flex-row justify-between gap-2 h-[45px] text-[16px] leading-21 font-medium -mx-[3px]">
        {canMint && (
          <button className="shadow-cb rounded-15 shadow-[#219653] bg-white text-[#219653] w-full">
            Mint
          </button>
        )}
        <Link
          href={url}
          className="flex shadow-cb bg-white rounded-15 w-full justify-center items-center"
        >
          <p className="text-center">Metadata</p>
        </Link>
      </div>
    );
  };

  const imgSrc = imageUrl || "/cat-pl1.jpg";
  const bgColor = statusBGColor(status);

  return (
    <div className="shadow-cb rounded-15 text-cb-normal h-[545px] w-[314px]" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col mx-[18px] my-[19px] gap-2">
        <div className="flex justify-between leading-21 text-[14px] font-medium">
          <p>#{id}</p>
          <p>Status: {status}</p>
        </div>
        <div className="w-[284px] h-[284px] relative">
          <Image
            className="h-full w-full aspect-square rounded-12"
            src={imgSrc}
            alt=""
            style={{ objectFit: "fill" }}
            width={40}
            height={40}
          ></Image>
          {fancied && (
            <div className="absolute right-[6px] bottom-[9px] rounded-15 bg-white text-[#FF2828] font-medium leading-21">
              <div className="flex justify-between gap-[7px] mx-3 my-1">
                <p className="text-[14px] font-normal leading-21">❤️</p>
                <p className="text-[14px] text-[#FF2828] font-medium leading-21">
                  {fancied}
                </p>
              </div>
            </div>
          )}
          <div className="absolute h-full w-full z-10 shadow-cb rounded-12 top-0 left-0"></div>
        </div>
        <div className="flex flex-col mt-1 gap-[6px]">
          <Infobuilder title="Owner" info={owner} />
          <Infobuilder title="Request Tx Hash" info={requestHash} />
          <ActionArea status={status} url={`/aigc/${id}`} />
        </div>
      </div>
    </div>
  );
};

export default AIGCCard;
