// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  location: string,
  country: string,
  city: string
}

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    place: string
  }
}

export interface Feature {
  properties: {
    country: string
    country_code: string
    state: string
    city: string
    lon: number
    lat: number
    formatted: string
    address_line1: string
    address_line2: string
    result_type: string
    name?: string
    postcode?: string
    street?: string
  }
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data[]>
) {

  const urlPath = 'https://api.geoapify.com/v1/geocode/autocomplete'
  const url = new URL(urlPath)
        url.searchParams.set('limit', '5')
        url.searchParams.set('apiKey', process.env.NEXT_API_KEY_GEOAPIFY!)
        url.searchParams.set('text', req.query.place)

  const response = await fetch(url)
  const { features }: { features: Feature[] } = await response.json()

  const toResponse = features.map(({ properties }) => {

    const street = properties.street ? properties.street + ', ' : ''
    const country = properties.country
    const city = properties.city
    const location = `${street}${city}, ${country}`

    return {
      location,
      country,
      city
    }
  })

  res.status(200).json(toResponse)
}
