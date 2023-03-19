import { useRouter } from "next/router"
import { DateRange } from "react-date-range"
import { useRef, FormEvent, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { SearchInput } from "./Search"
import { useOutsideClick } from "@hooks/useOutsideClick"
import { LocationPicker } from "./LocationPicker"
import { PersonPicker } from "./PersonPicker"
import { useFinder } from "@hooks/useFinder"
import { MdError } from "react-icons/md"

export const FinderLg = () => {

  const [searchError, setSearchError] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const {
    location,
    guests,
    showFinder,
    startDate,
    endDate,
    addGuest,
    closeFinder,
    openFinder,
    removeGuest,
    resetFinder,
    selectDate,
    selectLocation,
  } = useFinder()


  useOutsideClick(ref, (target: HTMLElement) => {
    const searchInput = document.querySelector('.search-input')
    const isValid = searchInput?.contains(target)
    !isValid && resetFinder()
  })

  const onConfirm = () => {

    if (!location) {
      setSearchError('Write or select a valid location')
      return
    }

    setSearchError(null)
    closeFinder()
    router.push({
      pathname: '/search',
      query: {
        location: location,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        ...guests,
      }
    })
  }

  return (
    <>
      <SearchInput
        value={location}
        onChange={(e: FormEvent<HTMLInputElement>) => selectLocation(e.currentTarget.value)}
        onClick={openFinder}
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
                value={location}
                onSelectLocation={selectLocation}
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
                onChange={selectDate}
              />

              <div className="w-full h-[70px] rounded-xl flex items-center justify-around">
                <PersonPicker
                  person='Adults'
                  value={guests.adults}
                  onClickAdd={() => addGuest('adults')}
                  onClickRemove={() => removeGuest('adults')}
                />
                <PersonPicker
                  person='Kids'
                  value={guests.kids}
                  onClickAdd={() => addGuest('kids')}
                  onClickRemove={() => removeGuest('kids')}

                />
                <PersonPicker
                  person='Babies'
                  value={guests.babies}
                  onClickAdd={() => addGuest('babies')}
                  onClickRemove={() => removeGuest('babies')}
                />
              </div>

              <div className='w-full h-full mt-5 space-x-4 flex justify-end items-end pb-6'>
                {searchError &&
                  <div className="w-full py-2 text-red-600 font-bold flex items-center gap-2">
                    <MdError />
                    {searchError}
                  </div>
                }
                <button
                  onClick={onConfirm}
                  className='hover:scale-110 active:scale-95 transition py-2 px-10 bg-red-500 rounded-full text-white'
                >
                  Accept
                </button>
                <button
                  onClick={resetFinder}
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
