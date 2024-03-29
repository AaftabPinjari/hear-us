import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'




export default function Home() {
  return (
    <div >
      <Head>
        <title>Hear Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />


    </div>
  )
}
