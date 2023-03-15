import React, { ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { HiSearch } from 'react-icons/hi'

export const SearchInput = ({
  value,
  ref,
  onChange = () => { },
  onFocus = () => { },
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <div className='search-input hidden md:flex items-center rounded-full py-2 md:border-2 md:shadow-sm hover:shadow-md transition-shadow'>
      <input
        ref={ref}
        onChange={onChange}
        value={value}
        onFocus= {onFocus}
        type="text"
        className='w-full flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
        placeholder='Search some place'
      />
      <div className='md:inline-flex md:mx-2 hidden h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer'>
        <HiSearch />
      </div>
    </div>
  )
}

export const SearchButton = ({
  onClick
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className='cursor-pointer rounded-full text-xl md:hidden bg-red-500 text-white p-2'
    >
      <HiSearch />
    </button>
  )
}
