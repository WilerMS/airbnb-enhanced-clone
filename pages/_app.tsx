import '../styles/globals.css'
import './../styles/HorizontalList.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
