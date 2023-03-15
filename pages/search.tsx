import { Header } from "@components/Header"
import { NextPage } from "next"
import Head from "next/head"

const Search: NextPage<{}> = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    </div>
  )
}

export default Search