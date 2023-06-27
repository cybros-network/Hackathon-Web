import React from 'react'
import { dm_mono_font } from '@/constants'

function BroadcastPage() {
    return (
        <div className=' text-black'>
            <div className=' mt-[60px] mx-[105px]'>
                <div className="text-4xl leading-[44px] font-semibold">
                    Broadcast Demo
                </div>
                <div className="text-[17px] mt-[6px] leading-21">
                    Dummy social-fi demo to broadcast message to subscribers on Telegram bot.
                </div>

                <div className="text-2xl leading-[29px]  mt-[30px]">
                    Before you go...
                </div>

                <div className="text-[15px] leading-[22px] inline-flex mt-3">
                    Send
                    <span>&nbsp;</span>
                    <div className={dm_mono_font.className}>
                        <p className="text-[#cc00d0]"> /subscribe 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY </p>
                    </div>
                    <span>&nbsp;</span>
                    <p>to</p>
                    <span>&nbsp;</span>
                    <div className="font-medium"> @haimeixianghaomingzidebot</div>
                </div>

            </div>
            <div className="flex flex-col mx-[84px] mt-9 gap-[18px] bg-[#BCFF2D0F] shadow-cb rounded-15">
                <div className="flex justify-between mx-[45px] mt-[30px] leading-[29px]">
                    <div className="text-[24px] font-semibold">
                        Send message to your subscribers
                    </div>
                    <div className="text-[16px] font-medium  text-cb-value">
                        Current queued jobs: 3
                    </div>
                </div>

                <div className="flex shadow-cb rounded-15 h-[90px] mx-[30px] mt-[2px] bg-white">
                    <textarea className='mt-[18px] mb-[8px] mx-6 w-full border-none outline-none shadow-none'
                        placeholder='Message goes here...'>
                    </textarea>
                </div>

                <div className='flex mx-[30px] mt-[18px] mb-[27px] justify-end'>
                    <button className="font-medium leading-[21px] text-cb-normal rounded-15 bg-white shadow-cb h-[45px] w-[88px]">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BroadcastPage