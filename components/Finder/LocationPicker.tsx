import { useQuery } from "react-query"

import { SmallHorizontalList } from "@components/Lists"
import { useDebounce } from "@hooks/useDebounce"

export const LocationPicker = ({
  value,
  onSelectLocation = (location) => { }
}: {
  value: string
  onSelectLocation: (location: string) => void
}) => {

  const debouncedValue = useDebounce(value, 1000)
  const defaultLocations = [{location: ''}]

  // TODO: Change this for the valid endpoint in google maps
  const { data, isLoading, isError } = useQuery<StayType[]>(
    debouncedValue,
    () => fetch(`http://localhost:3002/api/autocomplete/${debouncedValue}`).then(res => res.json()),
    {
      enabled: Boolean(debouncedValue)
    }
  )

  const handleClickLocation = (selectedLocation: string) => {
    onSelectLocation(selectedLocation)
  }

  if (isError) return <></>

  return (
    <div className='my-2 w-full min-h-[70px]'>
      <SmallHorizontalList>
        {(data ?? defaultLocations).map(({ location }) => (
          <div
            key={location}
            onClick={() => handleClickLocation(location)}
            className="whitespace-nowrap py-2 px-4 rounded-full text-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 cursor-pointer"
          >
            {location}
          </div>
        ))}
      </SmallHorizontalList >
    </div>
  )
}
