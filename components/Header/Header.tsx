import Image from 'next/image'
import React from 'react'
import { HiGlobeAlt, HiMenu, HiSearch, HiUserCircle } from 'react-icons/hi'

import logo from '@images/logo.svg'


export const Header = () => {
  return (
    <header className='sticky bg-white top-0 z-50 p-5 grid grid-cols-3 border-b md:px-10'>
      <div className='flex items-center cursor-pointer'>
        <Image
          src={logo}
          alt='airbnb-logo'
          className='block'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div className='flex items-center rounded-full py-2 md:border-2 md:shadow-sm hover:shadow-md transition-shadow'>
        <input
          type="text"
          className='w-full flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
          placeholder='Search some place'
        />
        <div className='md:inline-flex md:mx-2 hidden h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer'>
          <HiSearch />
        </div>
      </div>
      <div className='flex items-center space-x-4 justify-end text-gray-600'>
        <p className='md:block hidden font-bold rounded-full hover:bg-gray-100 py-2 px-3 cursor-pointer transition-all'>
          Become a host
        </p>
        <div className='cursor-pointer rounded-full hover:bg-gray-100 transition-all p-2 text-xl'>
          <HiGlobeAlt />
        </div>
        <div className='flex items-center border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition-shadow space-x-1'>
          <HiMenu className='text-xl text-gray-500' />
          <HiUserCircle className='text-2xl text-gray-500' />
        </div>
      </div>

    </header>
  )
}