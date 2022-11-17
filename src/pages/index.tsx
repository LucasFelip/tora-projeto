
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import Layout from '../components/Layout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     <Jumbotron/>
     <Layout>
     <Hero/>
    </Layout>
    </>
  )
}
