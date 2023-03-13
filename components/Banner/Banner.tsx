import Image from 'next/image'
import playa from '@images/pareja_2.jpg'

export const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image 
        src={playa}
        alt='personas en la playa' 
        objectFit='cover'
        objectPosition='0 15%'
        layout='fill'
      />
      <div className='absolute top-1/3 w-full text-center'>
        <p className='text-sm sm:text-lg font-bold'>Not sure where to go?</p>
        <button 
          className='bg-white shadow p-4 px-8 my-3 rounded-full text-red-500 font-bold transition hover:shadow-xl active:scale-90'>
          Show Map!
        </button>
      </div>
    </div>
  )
}
