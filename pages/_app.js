import Head from 'next/head'

import './_app.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>To the moon</title>
        <meta name="description" content="To the moon" />
        <link rel="prefetch" href="/left.png" />
        <link rel="prefetch" href="/right.png" />
        <link rel="prefetch" href="/earth.jpg" />
        <link rel="prefetch" href="/moon.png" />
        <link rel="prefetch" href="/epic_space_music.mp3" />
        <link rel="prefetch" href="/YOUJUSTWIN.png" />
      </Head>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
