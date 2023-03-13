import Image from "next/image"


export const SmallCard = ({ location, distance, img }: NearbyType) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 transition duration-200 cursor-pointer hover:bg-gray-100 hover:scale-105 rounded-xl'>
      <div className="relative h-16 w-16 rounded-x">
        <Image
          src={img}
          className='rounded-lg'
          layout='fill'
          alt={location}
        />
      </div>
      <div>
        <h2 className='font-bold'>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}
