import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { format } from 'date-fns'

const Search: NextPage<{}> = () => {

  const router = useRouter()
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





  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='flex'>

        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs text-gray-600'>500+ stays - {range} - for {adults} adults, {kids} kids and {babies} baby</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 gap-3 text-gray-800 whitespace-nowrap">
            <p className="filter-button">Cancellation Flexibility</p>
            <p className="filter-button">Type of place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More filters</p>
          </div>

        </section>


      </main>

      <Footer />

    </div>
  )
}

export default Search