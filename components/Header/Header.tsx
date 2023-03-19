import Image from 'next/image'
import { HiGlobeAlt, HiMenu, HiUserCircle } from 'react-icons/hi'

import logo from '@images/logo.svg'
import logoSm from '@images/logosm.svg'
import { FinderLg, FinderSm } from '@components/Finder'
import { useRouter } from 'next/router'
import { UserDropdownButton } from './UserDropdownButton'

export const Header = () => {

  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <header className='sticky bg-white bg-opacity-90 top-0 z-50 p-5 grid grid-cols-2 md:grid-cols-3 md:px-10 backdrop-blur'>
      <div className='flex items-center cursor-pointer'>
        <Image
          src={logo}
          onClick={goHome}
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
        <UserDropdownButton />
      </div>
    </header>
  )
}
