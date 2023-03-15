import { SearchInput } from "./Search"
import { useOutsideClick } from "@hooks/useOutsideClick"
import { useState, useRef, FormEvent } from "react"
import { DateRangePicker, RangeKeyDict } from "react-date-range"
import { LocationPicker } from "./LocationPicker"

import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

export const FinderLg = () => {

  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [searchedText, setSearchedText] = useState<string>('')
  const [showFinder, setShowFinder] = useState(false)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [guests, setGuests] = useState({
    adults: 2,
    kids: 0,
    babies: 0
  })

  const onCancel = () => {
    setSearchedText('')
    setShowFinder(false)
    setStartDate(new Date())
    setEndDate(new Date())
    setGuests({
      adults: 2,
      kids: 0,
      babies: 0
    })
  }

  useOutsideClick(ref, (target: HTMLElement) => {
    const searchInput = document.querySelector('.search-input')
    const isValid = searchInput?.contains(target)
    !isValid && onCancel()
  })

  const handleSelectDate = (rg: RangeKeyDict) => {
    setStartDate(new Date(rg.selection.startDate!))
    setEndDate(new Date(rg.selection.endDate!))
  }

  const handleSelectLocation = (location: string) => {
    setSearchedText(location)
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => setSearchedText(e.currentTarget.value)
  const handleFocus = () => setShowFinder(true)
  const handleConfirm = () => {
    const data = {
      placeSelected: searchedText,
      startDate,
      endDate,
      guests,
    }

    // TODO: What happens if not dates selected

    router.push({
      pathname: '/search',
      query: {
        location: searchedText,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      }
    })

    console.log({ data })
  }

  return (
    <>
      <SearchInput
        value={searchedText}
        onChange={handleChange}
        onFocus={handleFocus}
      />

      <AnimatePresence>
        {showFinder &&
          <div className='absolute w-full flex items-center justify-center col-span-3 mt-3' >
            <motion.div
              ref={ref}
              initial={{
                y: 0,
                opacity: 0
              }}
              animate={{
                y: 10,
                opacity: 1
              }}
              exit={{ opacity: 0, y: 0 }}
              className='absolute z-20 flex flex-col w-full max-w-[970px] h-[635px] bg-white px-10 pt-4 rounded-xl top-20 shadow-2xl'
            >
              <LocationPicker
                value={searchedText}
                onSelectLocation={handleSelectLocation}
              />

              <DateRangePicker
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

              <div className='w-full mt-10 space-x-4 flex justify-end h-full items-end pb-6'>
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
