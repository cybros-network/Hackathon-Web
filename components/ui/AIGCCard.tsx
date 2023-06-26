'use client'
import React from 'react'
import { AIGCCardProps } from '@/types'
import Image from 'next/image'


const AIGCCard = ({ id, imageUrl, status, meta, owner, requestHash }: AIGCCardProps) => {
  const statusBGColor = (status: 'Minted' | 'Generated' | 'Pending' | 'Failed' | 'Generating') => {
    switch (status) {
      case 'Minted': return '#00983D0F'
      case 'Generated': return '#0083FD0F'
      case 'Pending': return '#FF6F2D0F'
      case 'Failed': return '#0000000F'
      case 'Generating': return '#FB2DFF0F'
      default: new Error(`未知的状态: ${status}`);
    }
  }

  const Infobuilder = ({ title, info }: { title: string, info: string }) => {
    return (
      <div className='flex flex-col justify-start mt-1'>
        <p className='font-medium leading-5 text-[#4f4f4f]'>{title}</p>
        <p className="text-xs font-['DM_Mono'] text-[#333333] line-clamp-2 h-[34px]">{info}</p>
      </div>
    )
  }

  const ActionArea = ({ status }: { status: 'Minted' | 'Generated' | 'Pending' | 'Failed' | 'Generating' }) => {
    const canMint = status === 'Generated'
    return (
      <div>
        <div className='flex flex-row justify-between gap-2 h-11'>
          {canMint && <button className='border-solid border-[#219653] bg-white border-2 rounded-lg text-[#219653] w-full'>Mint</button> }
          <button className="border-solid border-[#828282] bg-white border-2 rounded-lg justify-center  w-full">
              Metadata
            </button>
        </div>
      </div >
    )
  }

  const imgSrc = imageUrl || `/cat-pl.jpg`
  const bgColor = statusBGColor(status)



  return (
    <div className=' border-solid border-[#828282] border-2 rounded-lg' style={{ backgroundColor: bgColor }}>
      <div className='flex flex-col mx-4 my-5 gap-2'>
        <div className='flex flex-row justify-between'>
          <p>#{id}</p>
          <p>Status: {status}</p>
        </div>
        <Image className='w-full aspect-square bg-[#E1E1E1] border-solid border-[#4f4f4f] border-2 rounded-lg'
          src={imgSrc}
          alt=''
          style={{ objectFit: 'fill' }}
          width={40}
          height={40}
        >
        </Image>
        <Infobuilder title='Owner' info={owner} />
        <Infobuilder title='Request Tx Hash' info={requestHash} />
        <ActionArea status={status} />

      </div>
    </div>
  )
}

export default AIGCCard