import { useOutsideClick } from '@hooks/useOutsideClick'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { HiMenu, HiUserCircle } from 'react-icons/hi'

export const UserDropdownButton = () => {

  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)

  useOutsideClick(ref, () => setIsExpanded(false))

  return (
    <div className='relative' ref={ref}>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className='flex items-center border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition-shadow space-x-1'
      >
        <HiMenu className='text-xl text-gray-500' />
        <HiUserCircle className='text-2xl text-gray-500' />
      </div>
      <AnimatePresence>
        {isExpanded &&
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute w-60 py-1 overflow-hidden flex flex-col right-0 top-[100%] bg-white shadow-[0px_4px_11px_3px_rgb(0,0,0,0.1)] rounded-lg"
          >
            <div className="cursor-pointer text-sm w-full py-3 px-5 truncate hover:bg-gray-100 hover:text-black">
              <span>Sign up</span>
            </div>
            <div className="cursor-pointer text-sm w-full py-3 px-5 truncate border-b hover:bg-gray-100 hover:text-black">
              <span>Log in</span>
            </div>
            <div className="cursor-pointer text-sm w-full py-3 px-5 truncate hover:bg-gray-100 hover:text-black">
              <span>Airbnb your home</span>
            </div>
            <div className="cursor-pointer text-sm w-full py-3 px-5 truncate hover:bg-gray-100 hover:text-black">
              <span>Host an experience</span>
            </div>
            <div className="cursor-pointer text-sm w-full py-3 px-5 truncate hover:bg-gray-100 hover:text-black">
              <span>Help</span>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
