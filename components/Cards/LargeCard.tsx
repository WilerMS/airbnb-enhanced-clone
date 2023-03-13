import Image from "next/image"

export type LargeCardPropsType = {
  img: string
  title: string
  description: string
  buttonText: string
}

export const LargeCard = ({ img, title, description, buttonText }: LargeCardPropsType) => {
  return (
    <section className='relative py-16 cursor-pointer'>

      <div className='relative h-96 min-w-[300px]'>
        <Image
          src={img}
          alt={title}
          layout='fill'
          className='rounded-xl'
          objectFit='cover'
        />
      </div>

      <div className='absolute top-32 left-12'> 

        <h3 className='text-4xl mb-3 w-65'>{title}</h3>
        <p className=''>{description}</p>
        <button className='text-sm text-white bg-black rounded-lg px-4 py-2 mt-5'>{buttonText}</button>

      </div>

    </section>
  )
}
