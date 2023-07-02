"use client";
import React from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { parseEther } from "viem";
import { useDebounce } from "@/utils/useDebounce";

function AIGCCreator() {
  const [prompt, setPrompt] = React.useState("");
  const debounedPrompt = useDebounce(prompt, 500);

  const { config } = usePrepareContractWrite({
    address: "0xa1a7ABD86d2AD059d02EB9b33A9FE29fAa49fFC9",
    functionName: "requestSimple",
    value: parseEther("0.02"),
    args: [debounedPrompt.trim()],
    abi: [
      {
        inputs: [
          {
            "internalType": "string",
            "name": "_prompt",
            "type": "string"
          }
        ],
        name: "requestSimple",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      },
    ]
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div className="flex flex-col gap-[18px] bg-white/[0.72] shadow-cb rounded-15">
			  {isSuccess && <div className="text-[40px]">
          Successfully! hash: ${data?.hash}
      </div>}
      <div className="flex justify-between items-start ml-[39px] mr-[42px] mt-[27px]">
        <div className="text-[21px] font-medium leading-[25.41px]">
                Generate
        </div>
        <div className="font-medium text-[15px] leading-[29px] text-cb-normal">
                Current queued jobs: 3
        </div>
      </div>
      <div
        className="flex rounded-15 mx-[30px] bg-[#F1F1F1] text-[16px] min-h-[90px]"
      >
        <textarea
          className="mt-[18px] mb-[8px]  mx-6 w-full border-none outline-none shadow-none text-cb-normal bg-[#F1F1F1] leading-21 font-normal"
          placeholder="Prompt goes here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        ></textarea>
      </div>
      <div className="flex justify-start mx-[33px] mb-6">
        <button className=" justify-center items-center shadow-entrance-aigc shadow-cb text-entrance-aigc font-medium leading-[21px] rounded-15 bg-white/[0.72] text-[16px] h-[45px]"
          onClick={() => {
            write?.();
          }}
          disabled={ !write || isLoading || prompt.trim() === "" }
        >
          <p className="mx-6">{isLoading ? "Generating" : "Generate"}</p> 
        </button>
      </div>
    </div>
  );
}

export default AIGCCreator;