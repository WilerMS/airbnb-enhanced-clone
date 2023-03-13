import { HiArrowSmRight } from "react-icons/hi"

export const Section = ({
  title,
  children
}: {
  title: string,
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <section className='pt-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl md:text-4xl font-semibold pb-5'>{title}</h2>
        <a href="#" className='text-sm sm:text-lg pb-4 flex items-center space-x-1 transition text-gray-500 hover:text-gray-800 hover:scale-105'>
          <span>See more</span>
          <HiArrowSmRight className='text-md'/>
        </a>
      </div>
      {children}
    </section>
  )
}
