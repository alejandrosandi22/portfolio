/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react/jsx-no-comment-textnodes */
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id='${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'`}
      />

      <Script strategy='lazyOnload'>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
    `}
      </Script>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
