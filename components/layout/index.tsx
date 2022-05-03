import Head from 'next/head';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

interface ChildrenProps {
  children?: ReactNode ;
}

export default function Layout({children}: any) {
  return(
    <>
    <Head>
      <title>Portfolio</title>
      <meta name="author" content="Alejandro Sandí" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    </Head>
    <Provider store={store}>
      {children }
    </Provider>
    </>
  );
}