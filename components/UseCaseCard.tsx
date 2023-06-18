import { UseCardProps } from "@/types";

const UseCaseCard = (props: UseCardProps) => {
  const bgColor = props.backgroudColor ? props.backgroudColor : "#FF6F2D0F";
  return (
    <div
      className={`flex flex-col justify-stretch space-y-[8px] box-border rounded-[15px] border-2 border-solid border-[#828282] bg-[${bgColor}] w-[314px] h-[235px] pb-[15px] p-[18px]`}
    >
      <p className="text-[18px] font-medium leading-2 text-[#4F4F4F] line-clamp-2 flex-shrink-0">
        {props.title}
      </p>
      <p
        id="summary"
        className="text-[13px] leading-4 text-[#4F4F4F] text-ellipsis overflow-hidden"
      >
        {props.summary}
      </p>
      <div className="grow"></div>
      <p className="text-[12px] font-medium flex-shrink-0">
        The demo needs Polygon token to work with.
      </p>
      <div className="flex items-center justify-center mx-[3px] font-medium text-black text-[16px] h-[45px] flex-shrink-0 box-border rounded-[15px] border-2 border-solid border-[#828282] bg-white">
        Go
      </div>
    </div>
  );
};

export default UseCaseCard;
