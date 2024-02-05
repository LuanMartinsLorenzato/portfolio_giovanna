import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import '../../styles/swiperProjects.css';
import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="America/Sao_Paulo"
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
