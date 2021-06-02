import '../styles/globals.css'
import logo from "../assets/logo.png";
import Link from "next/link"
import Image from "next/image"
import Layout from '../components/Layout';



function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>



  )
}

export default MyApp
