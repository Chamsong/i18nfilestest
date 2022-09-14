import '../styles/globals.css'
import type { AppProps } from 'next/app'
import nextI18NextConfig from '../next-i18next.config.js';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, nextI18NextConfig);
