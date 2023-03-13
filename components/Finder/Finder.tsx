import { useState } from "react"
import { DateRangePicker, RangeKeyDict } from "react-date-range"
import { PersonPicker } from "./PersonPicker"

export const Finder = ({
  onCancel = () => { },
  onConfirm = () => { },
}) => {

  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [guests, setGuests] = useState({
    adults: 0,
    kids: 0,
    babies: 0
  })

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelectDate = (rg: RangeKeyDict) => {
    setStartDate(new Date(rg.selection.startDate!))
    setEndDate(new Date(rg.selection.endDate!))
  }

  const handleAddPerson = (guest: 'adults' | 'kids' | 'babies') => {
    setGuests({
      ...guests,
      [guest]: guests[guest] + 1
    })
  }

  const handleRemovePerson = (guest: 'adults' | 'kids' | 'babies') => {
    setGuests({
      ...guests,
      [guest]: guests[guest] > 0 ? guests[guest] - 1 : 0
    })
  }

  return (
    <div className='absolute w-full flex items-center justify-center col-span-3 mt-3'>
      <div className='absolute bg-white px-10 py-10 rounded-xl top-24 shadow-lg'>

        <div className='w-full h-10 mb-6 px-4 flex justify-between'>
          <PersonPicker
            person='Adults'
            value={guests.adults}
            onClickAdd={() => handleAddPerson('adults')}
            onClickRemove={() => handleRemovePerson('adults')}
          />
          <PersonPicker
            person='Kids'
            value={guests.kids}
            onClickAdd={() => handleAddPerson('kids')}
            onClickRemove={() => handleRemovePerson('kids')}
          />
          <PersonPicker
            person='Babies'
            value={guests.babies}
            onClickAdd={() => handleAddPerson('babies')}
            onClickRemove={() => handleRemovePerson('babies')}
          />
        </div>

        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#ff385db6']}
          onChange={handleSelectDate}
        />

        <div className='w-full h-10 px-8 flex justify-between'>
          <button
            onClick={onCancel}
            className='hover:scale-110 transition'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='text-red-500 hover:scale-110 transition'
          >
            Accept
          </button>

        </div>

      </div>
    </div>
  )
}
