import { UseCardProps } from "@/types"
import Link from "next/link"

const UseCaseCard = (props: UseCardProps) => {
    let bgColor = props.backgroundColor ? props.backgroundColor : "#FF6F2D0F"
    let cardLink = props.link || "/"
    return (
        <div className="flex flex-col justify-between rounded-15 shadow-cb w-[314px] h-[235px]  text-cb-normal" style={{ backgroundColor: bgColor }}>
            <div className="mt-[19px] mx-[18px]">
                <p className="text-[18px] font-medium line-clamp-2 flex-shrink-0">{props.title}</p>
                <p className="text-[13px] text-ellipsis overflow-hidden mt-2 leading-4">{props.summary}</p>
                <p className="grow -mt-2" />
            </div>
            <div className="mb-[15px] mx-[15px]">
                <p className='mx-[3px] text-[12px] font-medium flex-shrink-0'>The demo needs Polygon token to work with.</p>
                <Link href={cardLink} className="flex justify-center items-center h-[45px] rounded-15 shadow-cb bg-white mt-3">
                    <p className="font-medium text-[16px] leading-21"
                    >Go
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default UseCaseCard