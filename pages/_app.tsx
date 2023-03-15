import '../styles/globals.css'
import './../styles/HorizontalList.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
