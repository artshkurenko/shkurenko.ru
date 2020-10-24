import React from "react";
import Head from "next/head";
import App from "containers/app";
import "containers/layout/layout.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <App>
      <Head>
        <link rel="preload" href="/fonts/sktr-bold.woff2" as="style" />
        <link rel="preload" href="/fonts/sktr-regular.woff2" as="style" />
      </Head>
      <Component {...pageProps} />
    </App>
  );
}
export default MyApp;
