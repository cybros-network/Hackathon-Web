import React from 'react'
import Image from 'next/image'
import { dm_mono_font } from '@/constants'

export default function Page({ params }: { params: { id: string } }) {

    interface PlaygroundCardTemplatePayload {
        title: string
        info: string
    }

    const PlaygroundInfo = ({ title, info }: PlaygroundCardTemplatePayload) => {
        return (
            <div className="flex flex-col justify-start gap-[3px]">
                <p className='font-medium leading-21 text-cb-normal w-full'>{title}</p>
                <div className={dm_mono_font.className}>
                <p className="text-[13px] leading-[17px] text-cb-value w-full line-clamp-2">{info}</p>
                </div>
            </div>
        )
    }
    return (
        <div className=' text-black'>
            <div className=' mt-[60px] mx-[105px]'>
                <p className="text-4xl font-semibold leading-[44px]">
                    Job #42
                </p>
                <p className="text-[17px] font-medium mt-[6px]">
                    in Pool #233
                </p>
            </div>
            <div className="flex flex-col justify-center mx-[84px] mt-9 bg-white shadow-cb rounded-15">
                <div className='flex content-start items-start mx-14 mt-[38px] gap-[58px]'>
                    <Image className='w-[342px] h-[367px] bg-gray-300'
                        src=""
                        alt='timeline placeholder'
                        style={{ objectFit: 'fill' }}
                        width={342}
                        height={367}
                    >
                    </Image>
                    <div className='flex flex-col gap-[18px]'>
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
