import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { Provider } from 'react-redux';
import { store } from '../../store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
