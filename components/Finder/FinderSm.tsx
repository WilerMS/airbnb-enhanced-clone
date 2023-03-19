import { SearchButton } from "./Search"
import { AnimatePresence, motion } from "framer-motion"
import { FormEvent, useState } from "react"
import { SearchInputSm } from './Search'
import { RangeKeyDict } from "react-date-range"
import { useRouter } from "next/router"


export const FinderSm = () => {

  const router = useRouter()
  const [showFinder, setShowFinder] = useState(false)
  const [searchedText, setSearchedText] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [guests, setGuests] = useState({
    adults: 2,
    kids: 0,
    babies: 0
  })

  const handleOpenFinder = () => {
    setShowFinder(true)
  }

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

    router.push({
      pathname: '/search',
      query: {
        location: searchedText,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      }
    })
  }

  return (
    <>
      <SearchButton onClick={handleOpenFinder} />

      <AnimatePresence mode="wait">
        {showFinder &&
          <motion.div
            initial={{ y: '50%', opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{ y: '50%', opacity: 0 }}
            transition={{ duration: .15 }}
            className='fixed z-20 w-[100vw] h-[100vh] bg-white top-0 left-0 ml-0 px-5 py-3  flex flex-col justify-between'
          >

            <SearchInputSm 
              value={searchedText}
              onChange={handleChange}
            />

            <div className='w-full h-full overflow-y-scroll scrollbar-hide'>

            </div>

            <div className='w-full flex justify-between h-1/7 items-end pb-5'>
              <button
                onClick={handleConfirm}
                className='hover:scale-110 active:scale-95 transition py-2 px-16 bg-red-500 rounded-full text-white'
              >
                Accept
              </button>
              <button
                onClick={onCancel}
                className='hover:scale-110 active:scale-95 transition py-2 px-16 bg-gray-500 rounded-full text-white'
              >
                Cancel
              </button>
            </div>

          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}
