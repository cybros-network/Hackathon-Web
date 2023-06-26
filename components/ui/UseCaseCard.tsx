import { UseCardProps } from "@/types"
import Link from "next/link"

const UseCaseCard = (props: UseCardProps) => {
    let bgColor = props.backgroundColor ? props.backgroundColor : "#FF6F2D0F"
    let cardLink = props.link || "/"
    return (
        
        <div className="flex flex-col justify-between box-border rounded-[15px] border-2 border-solid border-[#828282] w-[314px] h-[235px] pb-[15px] p-[18px]" style={{ backgroundColor: bgColor}}>
            <p className="text-[18px] font-medium leading-2 text-[#4F4F4F] line-clamp-2 flex-shrink-0 mb-2">{props.title}</p>
            <p id="summary" className="text-[13px] leading-4 text-[#4F4F4F] text-ellipsis overflow-hidden mb-2">{props.summary}</p>
            <div className='grow mb-0'></div>
            <p className='text-[12px] font-medium flex-shrink-0 mb-2'>The demo needs Polygon token to work with.</p>
            <Link href={cardLink} className="flex justify-center items-center h-11 box-border rounded-[15px] border-2 border-solid border-[#828282] bg-white">
            <p className="font-medium text-black text-[16px]"
            >Go
            </p>
            </Link>
        </div>
    )
}

export default UseCaseCard