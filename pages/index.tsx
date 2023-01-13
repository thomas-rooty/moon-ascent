import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from "../components/landingpage/LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moon Ascent</title>
        <meta name="description" content="🌕🚀 A Man to the Moon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LandingPage />
      </main>
    </>
  )
}
