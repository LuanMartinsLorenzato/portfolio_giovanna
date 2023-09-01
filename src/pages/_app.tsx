import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import bg from '../../public/assets/gif/bg-gif.gif'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Image src={bg.src} alt='Background Gif' fill/>
      <Component {...pageProps} />
    </div>
  )
}
