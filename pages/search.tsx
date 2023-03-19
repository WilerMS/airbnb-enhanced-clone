import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { format } from 'date-fns'
import { CardInfo } from "@components/Cards"
import { Map } from "@components/Map"
import { RiFullscreenFill, RiFullscreenExitFill } from 'react-icons/ri'
import dynamic from "next/dynamic"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const Search: NextPage<{ stays: StayType[] }> = ({ stays = [] }) => {

  const router = useRouter()
  const [isMapExpanded, setIsMapExpanded] = useState(false)
  const {
    location,
    startDate = new Date().toISOString(),
    endDate = new Date().toISOString(),
    adults,
    kids,
    babies
  } = router.query

  const formattedStartDate = format(new Date(startDate as string), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate as string), 'dd MMMM yy')
  const range = `${formattedStartDate} to ${formattedEndDate}`

  console.log({ stays })

  return (
    <div className='h-[100vh] overflow-hidden'>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='flex h-full'>


        <section
          className='overflow-y-scroll flex-grow pt-14 px-6 pb-40'
        >
          <p className='text-xs text-gray-600'>500+ stays - {range} - for {adults} adults, {kids} kids and {babies} baby</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 gap-3 text-gray-800 whitespace-nowrap">
            <p className="filter-button">Cancellation Flexibility</p>
            <p className="filter-button">Type of place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More filters</p>
          </div>

          {stays.map(({ img, location, title, description, rate, price }) => (
            <CardInfo
              key={title}
              img={img}
              location={location}
              title={title}
              description={description!}
              rate={rate!}
              price={price}
            />
          ))}

          <div className='flex items-center justify-center mt-16'>
            <p className='filter-button px-10'>
              See more
            </p>
          </div>
        </section>

        <section className={`transition relative w-[45%] h-full`}>
          <Map
            markers={stays}
          />
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const stays: StayType[] = await fetch('http://localhost:3000/stays').then(r => r.json())

  return {
    props: {
      stays
    }
  }
}

export default Search