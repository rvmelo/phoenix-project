import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'react-openlayers/dist/index.css'
import { Toaster } from 'sonner'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors closeButton position="top-right" />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
