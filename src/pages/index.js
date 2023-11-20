import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import Banner from '@/components/HomeComp/Banner/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
      <title>Makeup Mania</title>
      <meta property="og:title" content="My page title" key="title" />
      <link rel="icon" href="favicon.PNG" sizes="any" />
      </Head>
   <Layout>
<Banner/>
   </Layout>
    </main>
  )
}
