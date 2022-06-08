import Head from 'next/head';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store';

interface ChildrenProps {
  children?: ReactNode;
}

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='author' content='Alejandro Sandí' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
