
import React from 'react';
import { AppProps } from 'next/app';
import { Page } from '../components/Page/Page';
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Include the Page component */}
      <Page />
      {/* Render the main component */}
      {/* <Component {...pageProps} /> */}
    </div>
  );
}

export default MyApp;
