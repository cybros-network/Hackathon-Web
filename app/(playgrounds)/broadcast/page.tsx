import React from 'react'

function BroadcastPage() {
    return (
        <div className=' text-black'>
            <div className=' mt-16 mx-[105px]'>
                <div className="text-4xl font-semibold">
                    Broadcast Demo
                </div>
                <div className="text-base mt-2">
                    Dummy social-fi demo to broadcast message to subscribers on Telegram bot.
                </div>

                <div className="text-2xl  text-black mt-8">
                    Before you go...
                </div>

                <div className="text-sm leading-[22px] inline-flex">
                    Send
                    <span>&nbsp;</span>
                    <div className="text-sm font-['DM_Mono'] leading-[22px] text-[#cc00d0]">
                        /subscribe 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
                    </div>
                    <span>&nbsp;</span>
                    <div className="text-sm leading-[22px]">
                        to
                    </div>
                    <span>&nbsp;</span>
                    <div className="text-sm font-medium leading-[22px]">
                        @haimeixianghaomingzidebot
                    </div>
                </div>

            </div>
            <div className="flex flex-col mx-20 mt-9 gap-4 bg-[#BCFF2D0F] border-solid border-[#828282] border-2 rounded-lg">
                <div className="flex flex-row justify-between mx-11 mt-7">
                    <div className="text-2xl font-semibold">
                        Send message to your subscribers
                    </div>
                    <div className="text-right font-medium leading-[29px] text-[#333333]">
                        Current queued jobs: 3
                    </div>
                </div>
                <input className="border-solid border-[#828282] bg-white h-24 border-2 rounded-lg mx-8 placeholder:px-2"
                    type='text'
                    placeholder='Message goes here...'>
                </input>
                <div className="flex justify-between mx-8 mb-7">
                    <div />
                    <button className="font-medium leading-[21px] text-[#333333] border-solid border-[#828282] bg-white border-2 rounded-lg h-12 w-32">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BroadcastPage