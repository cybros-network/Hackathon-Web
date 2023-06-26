import React from 'react'
import Image from 'next/image'

export default function Page({ params }: { params: { id: string } }) {

    interface PlaygroundCardTemplatePayload {
        title: string
        info: string
    }

    const PlaygroundInfo = ({ title, info }: PlaygroundCardTemplatePayload) => {
        return (
            <div className="flex flex-col justify-start">
                <p className='ffont-medium leading-5 text-[#4f4f4f] w-full'>{title}</p>
                <p className="text-xs font-['DM_Mono'] text-[#333333] w-full line-clamp-2">{info}</p>
            </div>
        )
    }
    return (
        <div className=' text-black'>
            <div className=' mt-16 mx-[105px]'>
                <div className="text-4xl font-semibold">
                    Job #42
                </div>
                <div className="text-base font-medium mt-2">
                    in Pool #233
                </div>
            </div>
            <div className="flex flex-col justify-center mx-20 mt-9 bg-white border-solid border-[#828282] border-2 rounded-lg">
                <div className='flex content-start items-start mx-14 mt-9 gap-14'>
                    <Image className='w-1/3 aspect-square bg-gray-300'
                        src=""
                        alt='timeline placeholder'
                        style={{ objectFit: 'fill' }}
                    >
                    </Image>
                    <div className='flex flex-col gap-4'>
                        <PlaygroundInfo title="Block" info="11451419" />
                        <PlaygroundInfo title="Timestamp" info="2023-06-09 01:38:24 (+UTC)" />
                        <PlaygroundInfo title="Request Tx Hash" info="0xcc7e63bafa2105e11eee46c419f590f58c5fb841d5bc9a3260c6657cebf9c3be" />
                        <PlaygroundInfo title="Job Owner" info="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" />
                        <PlaygroundInfo title="Impl Version" info="0xcc7e63bafa2105e11" />
                        <PlaygroundInfo title="Job Status" info="Pending" />
                        <PlaygroundInfo title="Assigned Worker" info="N/A" />
                    </div>
                </div>
                <div className="h-14" />
            </div>
        </div>
    )
}
