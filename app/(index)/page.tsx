import Image from 'next/image'
import { KeynoteButton, IndexEntranceCard } from '@/components'
import React from 'react'
import { DC_URL, GITHUB_URL } from '@/constants'

export default function Home() {
  return (
    <main className="main">
      <header className="flex justify-between items-end w-full px-[72px] pt-[36px]">
        <div className="flex">
          <Image src="/Logo.svg" alt="Logo" width={98} height={92} />
        </div>
        <div className="flex gap-[60px] items-end">
          <div className='flex justify-between gap-[42px] text-[18px] text-cb-value leading-21 mb-[19px]'>
            <div>
              <a href={GITHUB_URL}>Github</a>
            </div>
            <div>
              <a href={DC_URL}>Discord</a>
            </div>
          </div>
          <div className='mb-[5px]'>
            <KeynoteButton />
          </div>
        </div>
      </header>

      <div className='mx-24 pt-[69px] text-black'>
        <div className='text-[36px] leading-[44px]'>What’s Cybros?</div>
        <div className='whitespace-pre-wrap mr-[136px] mt-[27px] leading-22 text-[15px]'>
          {`Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum.

Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum.`}
        </div>
        <div className='-mx-[3px] my-[30px]'>
          <div className='flex flex-col justify-start gap-[21px]'>
            <IndexEntranceCard type='aigc' />
            <div className='flex flex-row justify-start gap-[18px]'>
            <IndexEntranceCard type='github' />
            <IndexEntranceCard type='discord' />
            <IndexEntranceCard type='testnet' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
