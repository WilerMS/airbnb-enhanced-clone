import { useQuery } from "react-query"

import { SmallHorizontalList } from "@components/Lists"
import { useDebounce } from "@hooks/useDebounce"
import { useEffect } from "react"

export const LocationPicker = ({
  value,
  onSelectLocation = (location) => { }
}: {
  value: string
  onSelectLocation: (location: string) => void
}) => {

  const debouncedValue = useDebounce(value, 1000)

  // TODO: Change this for the valid endpoint in google maps
  const { data, isLoading, isError } = useQuery<StayType[]>(
    debouncedValue,
    () => fetch('http://localhost:3000/accommodations').then(res => res.json())
  )

  const handleClickLocation = (selectedLocation: string) => {
    onSelectLocation(selectedLocation)
  }

  return (
    <div className='my-2 w-full min-h-[70px]'>
      <SmallHorizontalList>
        {(data ?? []).map(({ location }) => (
          <div
            key={location}
            onClick={() => handleClickLocation(location)}
            className="whitespace-nowrap py-2 px-4 rounded-full text-lg text-gray-600 hover:text-gray-900 hover:bg-gray-200 cursor-pointer"
          >
            {location}
          </div>
        ))}
      </SmallHorizontalList >
    </div>
  )
}
