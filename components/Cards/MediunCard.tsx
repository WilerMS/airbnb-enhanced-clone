import Image from "next/image"
import { HiOutlineStar, HiStar } from "react-icons/hi";

type MediunCardType = {
  title: string;
  subtitle?: string;
  img: string;
  location?: string;
  price?: number;
  description?: string
  rate?: number
}

export const MediunCard = ({
  title,
  img,
  location,
  price,
  description,
  subtitle,
  rate,
}: MediunCardType) => {

  return (
    <div className='w-60 cursor-pointer hover:scale-105 transform transition duration-300 select'>
      <div className='relative h-60 w-60'>
        <Image
          src={img}
          alt={title}
          layout='fill'
          className='rounded-lg'
          objectFit='cover'
        />
      </div>
      <h3 className="mt-3 flex items-center justify-between pr-1">
        <span className="text-lg font-bold">{title}</span>
        {rate &&
          <span className="flex items-center space-x-1 text-gray-700">
            <HiStar />
            <span>{rate}</span>
          </span>
        }
      </h3>
      <h4 className="text-md text-gray-600 truncate text-ellipsis overflow-hidden">{location ?? subtitle}</h4>
      {price &&
        <h4 className="text-md">
          <span className="font-bold">{price} € </span>
          <span className="">night</span>
        </h4>
      }
    </div>
  )
}
