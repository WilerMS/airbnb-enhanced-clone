import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"

type URLParamsType = {
  location: string,
  startDate: Date,
  endDate: Date,
  guests: {
    adults: number,
    kids: number,
    babies: number,
  }
}

type getParamsType =  Omit<URLParamsType, "getURLParams">

export const useURLParams = (): URLParamsType => {
  const router = useRouter()

  const urlParams = useMemo((): getParamsType  => {
    // @ts-ignore
    const {
      location,
      startDate,
      endDate,
      adults,
      kids,
      babies
    }: {
      location: string,
      startDate: string,
      endDate: string,
      adults: string,
      kids: string,
      babies: string,
    } = router.query

    return {
      location: location ?? '',
      startDate: startDate ? new Date(startDate as string) : new Date(),
      endDate: startDate ? new Date(endDate as string) : new Date(),
      guests: {
        adults: adults ? Number(adults) : 2,
        kids: kids ? Number(kids) : 0,
        babies: babies ? Number(babies) : 0
      }
    }
  }, [router])

  return {
    ...urlParams
  }
}