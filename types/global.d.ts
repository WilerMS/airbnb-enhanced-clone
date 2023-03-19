declare interface PlacesType {
  title: string;
  subtitle?: string;
  img: string;
  location: string;
  description?: string;
  distance?: string;
  rate?: number;
  price?: number;
}

declare interface StayType {
  title: string;
  subtitle?: string;
  img: string;
  location: string;
  price: number;
  description?: string
  rate: number
  latitude: number
  longitude: number

}

declare interface MapPropTypes {
  markers: {
    img: string,
    location: string,
    title: string,
    rate: number,
    price: number,
    latitude: number,
    longitude: number,
  }[]
}


