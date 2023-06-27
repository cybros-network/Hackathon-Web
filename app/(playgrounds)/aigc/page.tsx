import React from 'react'
import { demoAIGCCardsCollection } from '@/constants'
import { AIGCCard } from '@/components'
import { AIGCCardProps } from '@/types'

function AigcPage() {
  return (
    <div className=' text-black'>
      <div className=' mt-[60px] mx-[105px]'>
        <div className="text-4xl leading-[43.57px] font-semibold">
          NFT Renderer Demo
        </div>
        <div className="text-[17px] leading-[20.57px] mt-[6px]">
          Generate NFT arts with distributed AI compute power on Cybros and mint them on
          Ethereum.
        </div>
      </div>

      <div className="flex flex-col mx-[84px] mt-9 gap-4 bg-[#FF6F2D0F] shadow-cb rounded-15">
        <div className="flex justify-between mx-[45px] mt-[30px]">
          <div className="text-2xl leading-[29px] font-semibold">
            Generate new art
          </div>
          <div className="font-medium text-[16px] text-cb-normal text-center">
            Current queued jobs: 3
          </div>
        </div>
        <div className="flex shadow-cb rounded-15 h-[90px] mx-[30px] mt-[2px] bg-white">
          <textarea className='mt-[18px] mb-[8px] mx-6 w-full border-none outline-none shadow-none'
            placeholder='Prompt goes here...'>
          </textarea>
        </div>

        <div className='flex mx-[30px] mt-[18px] mb-[27px] justify-end'>
          <button className="font-medium leading-[21px] text-cb-normal rounded-15 bg-white shadow-cb h-[45px] w-[119px]">
            Generate
          </button>
        </div>
      </div>

      <div className='flex justify-end mx-[103px] mt-[26px]'>
        <label htmlFor="my-checkbox" className="inline-flex items-center">
          <input
            id="my-checkbox"
            type="checkbox"
            className="form-checkbox h-5 w-5 bg-[#FF6F2D0F] border-solid border-[#4f4f4f] border-2 rounded-[3px]"
          />
          <span className="ml-2 text-gray-700">only show my arts</span>
        </label>
      </div>

      <div className='mx-[84px] mt-7 mb-14 flex flex-wrap gap-[27px]'>
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