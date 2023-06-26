import Image from "next/image"
import { Inter } from "next/font/google"

const KeynoteButton = () => {
  return (
    <div className="flex">
      <div className="flex pl-[25px] pr-[30px] py-[13px] bg-[#FFFFFF8F] box-border border-solid border-2 border-[#828282] rounded-[15px]">
        <div className="mr-[10px]">
          <Image src="/Spiral.svg" alt="" width={24} height={24} />
        </div>
        <div className="text-base text-[#4F4F4F]">Keynote</div>
      </div>
      </div>
  )
}

export default KeynoteButton