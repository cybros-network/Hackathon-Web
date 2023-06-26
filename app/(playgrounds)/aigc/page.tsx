import React from 'react'
import { demoAIGCCardsCollection } from '@/constants'
import { AIGCCard } from '@/components'
import { AIGCCardProps } from '@/types'

function AigcPage() {
  return (
    <div className=' text-black'>
      <div className=' mt-16 mx-[105px]'>
        <div className="text-4xl font-semibold">
          NFT Renderer Demo
        </div>
        <div className="text-base mt-2">
          Generate NFT arts with distributed AI compute power on Cybros and mint them on
          Ethereum.
        </div>
      </div>

      <div className="flex flex-col mx-20 mt-9 gap-4 bg-[#FF6F2D0F] border-solid border-[#828282] border-2 rounded-lg">
        <div className="flex flex-row justify-between mx-11 mt-7">
          <div className="text-2xl font-semibold">
            Generate new art
          </div>
          <div className="text-right font-medium leading-[29px] text-[#333333]">
            Current queued jobs: 3
          </div>
        </div>
        <input className="border-solid border-[#828282] bg-white h-24 border-2 rounded-lg mx-8 placeholder:px-2"
          type='text'
          placeholder='Prompt goes here...'>
        </input>
        <div className="flex justify-between mx-8 mb-7">
          <div />
          <button className="font-medium leading-[21px] text-[#333333] border-solid border-[#828282] bg-white border-2 rounded-lg h-12 w-32">
            Generate
          </button>
        </div>
      </div>

      <div className='flex justify-between mx-24 mt-7'>
        <div />
        <label htmlFor="my-checkbox" className="inline-flex items-center">
          <input
            id="my-checkbox"
            type="checkbox"
            className="form-checkbox h-5 w-5 bg-[#FF6F2D0F] border-solid border-[#4f4f4f] border-2 rounded-sm"
          />
          <span className="ml-2 text-gray-700">only show my arts</span>
        </label>
      </div>

      <div className='mx-20 mt-5 mb-14 grid grid-cols-4 gap-4'>
        {
          demoAIGCCardsCollection.map((props: AIGCCardProps) => {
            return (
              <AIGCCard key={props.id} {...props} />
            )
          })
        }
      </div>
    </div>
  )
}

export default AigcPage