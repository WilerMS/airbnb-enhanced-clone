import { SearchInput } from "./Search"
import { useOutsideClick } from "@hooks/useOutsideClick"
import { useState, useRef, FormEvent } from "react"
import { DateRange, RangeKeyDict } from "react-date-range"
import { LocationPicker } from "./LocationPicker"

import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import { PersonPicker } from "./PersonPicker"
import { useURLParams } from "@hooks/useURLParams"

export const FinderLg = () => {

  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const {
    location: initialLocation,
    startDate: initialStartDate,
    endDate: initialEndDate,
    guests: initialGuests,
  } = useURLParams()
  
  const [searchedText, setSearchedText] = useState(initialLocation)
  const [showFinder, setShowFinder] = useState(false)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [guests, setGuests] = useState(initialGuests)

  const onCancel = () => {
    setSearchedText(initialLocation)
    setShowFinder(false)
    setStartDate(initialStartDate)
    setEndDate(initialEndDate)
    setGuests(initialGuests)
  }

  useOutsideClick(ref, (target: HTMLElement) => {
    const searchInput = document.querySelector('.search-input')
    const isValid = searchInput?.contains(target)
    !isValid && onCancel()
  })

  const handleSelectLocation = (location: string) => setSearchedText(location)
  const handleSelectDate = (rg: RangeKeyDict) => {
    setStartDate(new Date(rg.selection.startDate!))
    setEndDate(new Date(rg.selection.endDate!))
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

  const handleChange = (e: FormEvent<HTMLInputElement>) => setSearchedText(e.currentTarget.value)
  const handleFocus = () => setShowFinder(true)
  const handleConfirm = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchedText,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        ...guests,
      }
    })
  }

  return (
    <>
      <SearchInput
        value={searchedText}
        onChange={handleChange}
        onClick={handleFocus}
      />

      <AnimatePresence>
        {showFinder &&
          <div className='absolute w-full flex items-center justify-center col-span-3 mt-3' >
            <motion.div
              ref={ref}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 10, opacity: 1 }}
              exit={{ opacity: 0, y: 0 }}
              className='absolute z-20 flex flex-col w-full max-w-[740px] bg-white px-10 pt-4 rounded-xl top-20 shadow-2xl'
            >
              <LocationPicker
                value={searchedText}
                onSelectLocation={handleSelectLocation}
              />

              <DateRange
                ranges={[{
                  startDate,
                  endDate,
                  key: 'selection',
                }]}
                minDate={new Date()}
                months={2}
                direction="horizontal"
                rangeColors={['#ff385dfd']}
                onChange={handleSelectDate}
              />

              <div className="w-full h-[70px] rounded-xl flex items-center justify-around">
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

              <div className='w-full h-full mt-5 space-x-4 flex justify-end items-end pb-6'>
                <button
                  onClick={handleConfirm}
                  className='hover:scale-110 active:scale-95 transition py-2 px-10 bg-red-500 rounded-full text-white'
                >
                  Accept
                </button>
                <button
                  onClick={onCancel}
                  className='hover:scale-110 active:scale-95 transition py-2 px-10 bg-gray-500 rounded-full text-white'
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </>
  )
}
