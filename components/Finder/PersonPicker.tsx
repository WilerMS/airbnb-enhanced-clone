import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi"

export const PersonPicker = ({
  person = '',
  value = 0,
  onClickAdd = () => { },
  onClickRemove = () => { },
}) => {
  
  return (
    <div className='flex items-center space-x-4 justify-between'>
      <h3 className='text-xl text-gray-600'>{person}</h3>
      <div className='flex items-center space-x-1'>
        <span
          onClick={onClickRemove}
          className='text-xl text-gray-600 cursor-pointer transition hover:text-gray-800 hover:scale-110 active:scale-95'
        >
          <HiOutlineMinusCircle />
        </span>
        <span>{value}</span>
        <span
          onClick={onClickAdd}
          className='text-xl cursor-pointer text-gray-600 transition hover:text-gray-800 hover:scale-110 active:scale-95'
        >
          <HiOutlinePlusCircle />
        </span>
      </div>
    </div>
  )
}
