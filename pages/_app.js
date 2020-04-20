import Head from 'next/head'

import './_app.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>To the moon</title>
        <meta name="description" content="Too the moon" />
      </Head>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
