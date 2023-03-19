import '../styles/globals.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import 'leaflet/dist/leaflet.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
