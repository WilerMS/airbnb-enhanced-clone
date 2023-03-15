import Image from 'next/image'
import { HiGlobeAlt, HiMenu, HiUserCircle } from 'react-icons/hi'

import logo from '@images/logo.svg'
import { FinderLg, FinderSm } from '@components/Finder'

export const Header = () => {
  return (
    <header className='sticky bg-white top-0 z-50 p-5 grid grid-cols-2 md:grid-cols-3 border-b md:px-10'>
      <div className='flex items-center cursor-pointer'>
        <Image
          src={logo}
          alt='airbnb-logo'
          className='block'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <FinderLg />
      <div className='flex items-center gap-4 justify-end text-gray-600'>
        <p className='md:block hidden font-bold rounded-full hover:bg-gray-100 py-2 px-3 cursor-pointer transition-all'>
          Become a host
        </p>
        <FinderSm />
        <div className='hidden md:flex cursor-pointer rounded-full hover:bg-gray-100 transition-all p-2 text-xl'>
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
