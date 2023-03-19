import { Header } from '@components/Header'
import { Banner } from '@components/Banner'
import { LargeCard, MediunCard, SmallCard } from '@components/Cards'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '@components/Footer'
import { HorizontalList } from '@components/Lists'
import { Section } from '@components/Section'

type PropsType = {
  nearby: PlacesType[]
  liveAnyWhere: PlacesType[]
  places: PlacesType[]
  cities: PlacesType[]
  recommendations: StayType[]
}

const Home: NextPage<PropsType> = ({
  nearby = [],
  liveAnyWhere = [],
  places = [],
  recommendations = [],
  cities = []
}) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='mx-auto px-8'>
        <Section title='Explore nearby'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {nearby.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </Section>

        <Section title='Recommended for you'>
          <HorizontalList scrollSize={300}>
            {recommendations.map(({ img, title, location, price, rate }) => (
              <MediunCard
                key={title}
                img={img}
                title={title}
                location={location}
                price={price}
                rate={rate}
              />
            ))}
          </HorizontalList>
        </Section>

        {/* <Section title='Live Anywhere'>
          <HorizontalList scrollSize={300}>
            {liveAnyWhere.map(({ img, title }) => (
              <MediunCard
                key={title}
                img={img}
                title={title}
              />
            ))}
          </HorizontalList>
        </Section> */}

        <Section title='Most popular places'>
          <HorizontalList scrollSize={300}>
            {places.map(({ img, title, location, price, rate }) => (
              <MediunCard
                key={title}
                img={img}
                title={title}
                location={location}
                price={price}
                rate={rate}
              />
            ))}
          </HorizontalList>
        </Section>

        <Section title='More from Spain'>
          <HorizontalList scrollSize={300}>
            {cities.map(({ img, title, subtitle }) => (
              <MediunCard
                key={title}
                img={img}
                title={title}
                subtitle={subtitle}
              />
            ))}
          </HorizontalList>
        </Section>


        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The best places this summer'
          description='Desired places by Airbnb lovers'
          buttonText='Get Info'
        />

      </main>

      <Footer />

    </div>
  )
}

export async function getServerSideProps() {
  const nearby: PlacesType[] = await fetch('http://localhost:3000/nearby').then(r => r.json())
  const liveAnyWhere: PlacesType[] = await fetch('http://localhost:3000/live-anywhere').then(r => r.json())
  const places: PlacesType[] = await fetch('http://localhost:3000/places').then(r => r.json())
  const cities: PlacesType[] = await fetch('http://localhost:3000/cities').then(r => r.json())
  const recommendations: StayType[] = await fetch('http://localhost:3000/recommendations').then(r => r.json())

  return {
    props: {
      nearby,
      liveAnyWhere,
      places,
      recommendations,
      cities,
    }
  }
}

export default Home
