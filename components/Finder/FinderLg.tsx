import { useOutsideClick } from "@hooks/useOutsideClick"
import { useState, useRef, useEffect } from "react"
import { DateRangePicker, RangeKeyDict, DateRange } from "react-date-range"
import { LocationPicker } from "./LocationPicker"
import { PersonPicker } from "./PersonPicker"

export const FinderLg = ({
  searchedText = '',
  onCancel = () => { },
}) => {

  const ref = useRef<HTMLDivElement>(null)
  const [placeSelected, setPlaceSelected] = useState(searchedText)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [guests, setGuests] = useState({
    adults: 2,
    kids: 0,
    babies: 0
  })

  useOutsideClick(ref, (target: HTMLElement) => {
    const searchInput = document.querySelector('.search-input')
    const isValid = searchInput?.contains(target)
    !isValid && onCancel()
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

  const handleSelectLocation = (location: string) => {
    setPlaceSelected(location)
    console.log(location)
  }

  const handleAddGuest = (guest: 'adults' | 'kids' | 'babies') => {
    setGuests({
      ...guests,
      [guest]: guests[guest] + 1
    })
  }

  const handleRemoveGuest = (guest: 'adults' | 'kids' | 'babies') => {
    setGuests({
      ...guests,
      [guest]: guests[guest] > 0 ? guests[guest] - 1 : 0
    })
  }

  const handleConfirm = () => {
    const data = {
      placeSelected,
      startDate,
      endDate,
      guests,
    }

    console.log({ data })
  }

  return (
    <div className='absolute w-full flex items-center justify-center col-span-3 mt-3'>
      <div ref={ref} className='absolute flex flex-col w-full max-w-[970px] h-[700px] bg-white px-10 pt-4 rounded-xl top-24 shadow-2xl'>

        <LocationPicker
          value={searchedText}
          onSelectLocation={handleSelectLocation}
        />

        <div className='w-full h-10 mb-6 px-4 flex justify-between'>
          <PersonPicker
            person='Adults'
            value={guests.adults}
            onClickAdd={() => handleAddGuest('adults')}
            onClickRemove={() => handleRemoveGuest('adults')}
          />
          <PersonPicker
            person='Kids'
            value={guests.kids}
            onClickAdd={() => handleAddGuest('kids')}
            onClickRemove={() => handleRemoveGuest('kids')}
          />
          <PersonPicker
            person='Babies'
            value={guests.babies}
            onClickAdd={() => handleAddGuest('babies')}
            onClickRemove={() => handleRemoveGuest('babies')}
          />
        </div>

        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          months={2}
          direction="horizontal"
          rangeColors={['#ff385dfd']}
          onChange={handleSelectDate}
        />

        <div className='w-full mt-5 px-8 flex justify-between'>
          <button
            onClick={onCancel}
            className='hover:scale-110 transition'
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className='hover:scale-110 transition py-2 px-10 bg-red-500 rounded-full text-white'
          >
            Accept
          </button>

        </div>

      </div>
    </div>
  )
}
