import { AppProps } from 'next/app'
import '../styles/globals.css'
import { Toaster } from 'sonner'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster richColors closeButton position="top-right" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
