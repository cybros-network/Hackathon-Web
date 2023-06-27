import React from 'react'
import { WalletButton } from '@/components'
import { dm_mono_font } from '@/constants'

function FaucetPage() {

    interface FaucetCardTemplatePayload {
        title: string
        info: string
    }

    const FaucetInfo = ({ title, info }: FaucetCardTemplatePayload) => {
        return (
            <div className="flex flex-col justify-start gap-[3px]">
                <p className='font-medium leading-[21px] text-cb-normal text-[16px] w-full'>{title}</p>
                <div className={dm_mono_font.className}>
                    <p className="text-[13px] leading-[17px] text-cb-value w-full line-clamp-2">{info}</p>
                </div>
            </div>
        )
    }

    return (
        <div className=' text-black'>
            <div className=' mt-[60px] mx-[105px]'>
                <div className="text-4xl font-semibold leading-[44px]">
                    Faucet
                </div>
                <div className="text-[17px] mt-[6px] leading-21">
                    Self-bootstrapped faucet to make fun with the demo testnet.
                </div>
            </div>
            <div className="flex flex-col mx-[84px] mt-9 bg-[#24ECC80F] shadow-cb rounded-15 text-cb-value">
                <div className="flex flex-row justify-end mx-[45px] mt-[30px]">
                    <div className="tfont-medium leading-[29px]">
                        Current queued jobs: 3
                    </div>
                </div>
                <div className="flex flex-col gap-3 mx-[45px] mt-[3px]">
                    <FaucetInfo title="Current Polygon Wallet" info="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" />
                    <FaucetInfo title="Corresponding Cybros Wallet" info="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" />
                    <FaucetInfo title="You will get" info="10000000 CBT" />
                </div>

                <div className="flex justify-center mb-9 mt-[31px]">
                    <button className="font-medium text-[16px] leading-[21px] text-cb-value shadow-cb rounded-15 h-[45px] w-[79px]">
                        Dip!
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mx-[84px] mt-9 gap-[45px] h-[321px] bg-[#24ECC80F] shadow-cb rounded-15">
                <p className='font-medium, text-[16px] leading-[29px] text-cb-value'>Connect wallet to continue</p>
                <WalletButton />
            </div>

        </div>
    )
}

export default FaucetPage