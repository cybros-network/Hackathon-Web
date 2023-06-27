import Image from 'next/image'
import { KeynoteButton, UseCaseCard } from '@/components'
import { UseCardProps } from '@/types'
import { demoUseCardsCollection } from '@/constants'
import React from 'react'

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
              <a href='/faucet'>Faucet</a>
            </div>
            <div>
              <a href='https://github.com'>Github</a>
            </div>
            <div>
              <a href='/'>Polkadot.js</a>
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
        <div className='-mx-[3px] mt-[36px]'>
          <KeynoteButton />
        </div>
        <p className='text-[24px] mt-12 leading-[29px]'>Playground</p>
        <p className='text=[15px] leading-22 mt-3'>Discover the power of Cybros through playful use-case demonstrations.</p>
        <div className='-mx-[3px] my-[30px]'>
          <div className='flex flex-wrap gap-[21px]'>
            {
              demoUseCardsCollection.map((card: UseCardProps) => (
                <UseCaseCard key={card.title} {...card} />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
