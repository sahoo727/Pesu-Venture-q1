import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/Landing'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pesu Venture Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing/>
      
    </div>
  )
}
