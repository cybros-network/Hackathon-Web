import React from 'react'
import Image from 'next/image'

const WalletButton = () => {
    return (
        <div className="shadow-cb rounded-15 bg-white flex mt-[10px] gap-[13px] w-[200px] h-[49px] items-start">
            <Image
                className='w-[21px] h-[21px] ml-6 mt-[14px]'
                src="/wallet-icon.svg"
                alt=''
                width={21}
                height={21}
            />
            <p className="font-medium leading-[21px] text-[16px] mt-[15px]">
                Connect Wallet
            </p>
        </div>
    )
}

export default WalletButton