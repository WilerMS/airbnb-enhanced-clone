import { useRef } from 'react'
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi'

type HorizontalListPropsType = {
  scrollSize?: number,
  children: JSX.Element | JSX.Element[]
}

export const HorizontalList = ({
  scrollSize = 300,
  children,
}: HorizontalListPropsType) => {

  const ref = useRef<HTMLDivElement>(null)

  const scrollRight = () => ref.current?.scroll({
    left: ref.current?.scrollLeft + scrollSize,
    behavior: 'smooth'
  })

  const scrollLeft = () => ref.current?.scroll({
    left: ref.current?.scrollLeft - scrollSize,
    behavior: 'smooth'
  })


  return (
    <div className='group horizontal-list relative flex items-center'>
      <button
        onClick={scrollLeft}
        className='absolute left-0 hidden md:group-hover:block text-2xl border rounded-full p-3 z-20 bg-white transition hover:scale-110 active:scale-95 hover:shadow-lg'
      >
        <HiOutlineChevronLeft />
      </button>

      <div
        ref={ref}
        className='flex space-x-4 py-3 px-8 -mx-8 scrollbar-hide overflow-scroll select-none items-center'
      >
        {children}
      </div>
      <button
        onClick={scrollRight}
        className='absolute right-0 hidden md:group-hover:block text-2xl border-2 rounded-full p-3 z-20 bg-white transition hover:scale-110 active:scale-95 hover:shadow-lg'
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  )
}
