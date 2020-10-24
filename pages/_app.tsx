import React from "react";
import App from "containers/app";
import "containers/layout/layout.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}
export default MyApp;
