import { AppProps } from "next/app";
import Head from "next/head";
import { Provider as NextAuthProvider } from "next-auth/client";

import { Header } from "../components/Header";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Head>
        <title>ig.news</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
