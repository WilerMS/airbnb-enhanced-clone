import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { divIcon, icon } from 'leaflet'
import { MediunCard } from '@components/Cards'
import png from '@images/pin.png'

export const Icon = L.divIcon({
  className: 'custom-div-icon',
  html: `
  <div style='' class='flex items-center justify-center'>
    <img style="height: 50px; width: 50px;" src="${png.src}" />
  </div>
  `,
  iconSize: [50, 50]
});

export const Map = ({ markers = [] }: MapPropTypes) => {
  return (
    <MapContainer
      className='w-full h-full z-0'
      // @ts-ignore
      center={[51.507582, -0.104505]}
      zoom={17}
      scrollWheelZoom={true}
      minZoom={15}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      //url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.title}
          position={[
            marker.latitude ?? 51.505,
            marker.longitude ?? -0.09
          ]}
          icon={Icon}
        >
          <Popup className='-ml-1 [&>div]:mb-6 [&>*:nth-child(2)]:hidden [&>*:nth-child(1)>div]:m-0 [&>*:nth-child(1)]:bg-transparent [&>*:nth-child(1)]:shadow-none [&>*:nth-child(1)>div]:bg-transparent  [&>*:nth-child(3)]:hidden'>
            <MediunCard
              className='shadow-lg pb-4 [&>*:nth-child(n+3)]:px-4 md:w-80'
              imgClassName='md:w-80'
              img={marker.img}
              title={marker.title}
              location={marker.location}
              rate={marker.rate}
              price={marker.price}
            />
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  )
}

export default Map