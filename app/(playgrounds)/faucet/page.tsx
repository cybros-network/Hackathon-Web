import React from 'react'
import { WalletButton } from '@/components'

function FaucetPage() {

    interface FaucetCardTemplatePayload {
        title: string
        info: string
    }

    const FaucetInfo = ({ title, info }: FaucetCardTemplatePayload) => {
        return (
            <div className="flex flex-col justify-start">
                <p className='font-medium leading-[21px] text-[#4f4f4f] w-full'>{title}</p>
                <p className="text-xs font-['DM_Mono'] text-[#333333] w-full line-clamp-2">{info}</p>
            </div>
        )
    }

    return (
        <div className=' text-black'>
            <div className=' mt-16 mx-[105px]'>
                <div className="text-4xl font-semibold">
                    Faucet
                </div>
                <div className="text-base mt-2">
                    Self-bootstrapped faucet to make fun with the demo testnet.
                </div>
            </div>
            <div className="flex flex-col mx-20 mt-9 gap-4 bg-[#24ECC80F] border-solid border-[#828282] border-2 rounded-lg">
                <div className="flex flex-row justify-between mx-11 mt-7">
                    <div />
                    <div className="text-right font-medium leading-[29px] text-[#333333]">
                        Current queued jobs: 3
                    </div>
                </div>
                <div className="flex flex-col gap-3 mx-11 mb-4">
                    <FaucetInfo title="Current Polygon Wallet" info="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" />
                    <FaucetInfo title="Corresponding Cybros Wallet" info="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" />
                    <FaucetInfo title="You will get" info="10000000 CBT" />
                </div>

                <div className="flex justify-center mb-9">
                    <div />
                    <button className="font-medium leading-[21px] text-[#333333] border-solid border-[#828282] bg-white border-2 rounded-lg h-12 w-20">
                        Dip!
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mx-20 mt-9 gap-11 h-80 bg-[#24ECC80F] border-solid border-[#828282] border-2 rounded-lg">
                <p className='font-medium, leading-7 text-[#333333]'>Connect wallet to continue</p>
                <WalletButton />
            </div>

        </div>
    )
}

export default FaucetPage