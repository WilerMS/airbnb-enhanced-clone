import Image from 'next/image'
import React from 'react'
import { HiOutlineHeart, HiStar } from 'react-icons/hi'

interface CardInfoType {
  img: string
  location: string
  title: string
  description: string
  rate: number
  price: number
  total?: number
}

export const CardInfo = ({
  img,
  location,
  title,
  description,
  rate,
  price,
  total
}: CardInfoType) => {
  return (
    <div className='cursor-pointer flex p-4 shadow mb-5 rounded-xl hover:shadow-lg transition'>
      <div className='relative overflow-hidden rounded-xl flex h-24 w-40 md:w-80 md:h-52 flex-shrink-0'>
        <Image
          src={img}
          alt='personas en la playa'
          objectFit='cover'
          layout='fill'
        />
      </div>

      <div className='flex flex-col flex-grow pl-5'>

        <div className='flex justify-between'>
          <p className='text-gray-600 text-sm'>{location}</p>
          <span className='text-xl'>
            <HiOutlineHeart />
          </span>
        </div>

        <h4 className='text-xl'>{title}</h4>

        <div className='mt-3 text-gray-500 text-md'>
          <p>{description}</p>
        </div>

        <div className='h-full flex items-end justify-between'>
          <div className='pt-5 flex items-center gap-2'>
            <HiStar className='text-xl text-red-500' />
            <span>{rate}</span>
          </div>
          <div className=''>
            <p>
              <span className='font-bold text-lg'>{price}</span>
              <span className='text-sm text-gray-600'> €/night</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
