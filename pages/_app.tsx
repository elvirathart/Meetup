import React from "react";
import { AppProps } from "next/app";
import "../assets/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
