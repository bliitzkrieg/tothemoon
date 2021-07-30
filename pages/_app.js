import Head from 'next/head'
import { useState } from 'react';

import './_app.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>To the moon</title>
        <meta name="description" content="To the moon" />
        <link rel="preload" href="/LEFT.webp" />
        <link rel="preload" href="/RIGHT.webp" />
        <link rel="preload" href="/earth.jpg" />
        <link rel="preload" href="/moon.png" />
        <link rel="preload" href="/epic_space_music.mp3" />
        <link rel="preload" href="/YOUJUSTWIN.png" />
      </Head>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Component {...pageProps} isLoading={isLoading} />
    </React.Fragment>
  );
}
