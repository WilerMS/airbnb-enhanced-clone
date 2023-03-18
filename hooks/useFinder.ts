import { useEffect, useState } from "react"
import { RangeKeyDict } from "react-date-range"
import { useURLParams } from "./useURLParams"

export const useFinder = () => {

  const {
    location: initLocation,
    startDate: initStartDate,
    endDate: initEndDate,
    guests: initGuests
  } = useURLParams()

  const [location, setLocation] = useState(initLocation)
  const [showFinder, setShowFinder] = useState(false)
  const [startDate, setStartDate] = useState(initStartDate)
  const [endDate, setEndDate] = useState(initEndDate)
  const [guests, setGuests] = useState(initGuests)

  useEffect(() => {
    setLocation(initLocation)
    setStartDate(initStartDate)
    setEndDate(initEndDate)
    setGuests(initGuests)
  }, [ initLocation, initStartDate,  initEndDate, initGuests ])

  const selectLocation = (location: string) => setLocation(location)
  const selectDate = (rg: RangeKeyDict) => {
    setStartDate(new Date(rg.selection.startDate!))
    setEndDate(new Date(rg.selection.endDate!))
  }
  const addGuest = (guest: 'adults' | 'kids' | 'babies') => {
    setGuests({
      ...guests,
      [guest]: guests[guest] + 1
    })
  }
  const removeGuest = (guest: 'adults' | 'kids' | 'babies') => {
    setGuests({
      ...guests,
      [guest]: guests[guest] > 0 ? guests[guest] - 1 : 0
    })
  }

  const openFinder = () => setShowFinder(true)
  const closeFinder = () => setShowFinder(false)
  const resetFinder = () => {
    selectLocation(initLocation)
    setShowFinder(false)
    setStartDate(initStartDate)
    setEndDate(initEndDate)
    setGuests(initGuests)
  }

  return {
    location,
    showFinder,
    startDate,
    endDate,
    guests,
    selectLocation,
    selectDate,
    addGuest,
    removeGuest,
    openFinder,
    resetFinder,
    closeFinder,
  }
}