import Image from "next/image"
import { Inter } from "next/font/google"

const KeynoteButton = () => {
  return (
    <div className="flex space-x-[100px] px-[30px] py-3 bg-[#FFFFFF8F] box-border border-solid border-2 border-[#828282] rounded-[15px]">
      <div>
        <Image src="/Spiral.svg" alt="" width={24} height={24} />
      </div>
      <div className="text-base text-[#4F4F4F]">Keynote</div>
    </div>
  )
}

export default KeynoteButton