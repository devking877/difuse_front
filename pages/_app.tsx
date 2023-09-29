import Header from '../src/app/Components/Header'
import type { AppProps } from 'next/app'
import '@/app/globals.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Header/>
        <Component {...pageProps} />
    </div>
  )
}