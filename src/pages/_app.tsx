import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import '../../styles/swiperProjects.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
