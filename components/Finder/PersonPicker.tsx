import { HiMinus, HiPlus } from "react-icons/hi"

export const PersonPicker = ({
  person = '',
  value = 0,
  onClickAdd = () => { },
  onClickRemove = () => { },
}) => {
  
  return (
    <div className='flex items-center gap-4 justify-between cursor-pointer border py-2 px-6 rounded-full transition hover:shadow-md hover:scale-105'>
      <h3 className='text-xl text-gray-600'>{person}</h3>
      <div className='flex items-center gap-2'>
        <span
          onClick={onClickRemove}
          className='text-xl text-gray-600 transition hover:text-gray-800 hover:scale-110 active:scale-95'
        >
          <HiMinus />
        </span>
        <span>{value}</span>
        <span
          onClick={onClickAdd}
          className='text-xl text-gray-600 transition hover:text-gray-800 hover:scale-110 active:scale-95'
        >
          <HiPlus />
        </span>
      </div>
    </div>
  )
}
