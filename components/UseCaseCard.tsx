import { UseCardProps } from "@/types"

const UseCaseCard = (props: UseCardProps) => {
    let bgColor = props.backgroudColor ? props.backgroudColor : "bg-[#FF6F2D0F]"
    return (
        <div className="flex flex-col justify-between box-border rounded-[15px] border-2 border-solid border-[#828282] w-[314px] h-[235px] pb-[15px] p-[18px]" style={{ backgroundColor: bgColor}}>
            <p className="text-[18px] font-medium leading-2 text-[#4F4F4F] line-clamp-2 flex-shrink-0 mb-2">{props.title}</p>
            <p id="summary" className="text-[13px] leading-4 text-[#4F4F4F] text-ellipsis overflow-hidden mb-2">{props.summary}</p>
            <div className='grow mb-0'></div>
            <p className='text-[12px] font-medium flex-shrink-0 mb-2'>The demo needs Polygon token to work with.</p>
            <button className="mx-[1px] font-medium text-black text-[16px] h-[45px] flex-shrink-0 box-border rounded-[15px] border-2 border-solid border-[#828282] bg-white"
            >Go
            </button>
        </div>
    )
}

export default UseCaseCard