import React from 'react'
import Image from 'next/image'

const WalletButton = () => {
    return (
        <div className="border-solid border-[#828282] border-2 rounded-lg bg-white flex flex-row justify-center mt-2 gap-3 w-48 h-12 items-center">
            <Image
                src="/wallet-icon.svg"
                alt=''
                width={21}
                height={21}
            />
            <div className="font-medium leading-[21px] text-[#333333]">
                Connect Wallet
            </div>
        </div>
    )
}

export default WalletButton