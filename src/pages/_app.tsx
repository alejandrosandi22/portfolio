import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>{isLoading ? <Loading /> : <Component {...pageProps} />}</Layout>
  );
}
