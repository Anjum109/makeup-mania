import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import Banner from '@/components/HomeComp/Banner/Banner'
import SecondBanner from '@/components/HomeComp/Banner/SecondBanner'
import BeautySpa from '@/components/HomeComp/BeautySpa'
import OurServices from '@/components/HomeComp/OurServices'
import PricePlans from '@/components/HomeComp/PricePlans'
import PhotoGallary from '@/components/HomeComp/PhotoGallary'
import MakeApponintment from '@/components/MakeAppointment/MakeApponintment'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
      <title>Makeup Mania</title>
      <meta property="og:title" content="My page title" key="title" />
      <link rel="icon" href="favicon.png" sizes="any" />
      </Head>
        <Layout>
            <div className='banner-bg bg-[#f3efef]'>
              <Banner/>
              <SecondBanner/>
              <BeautySpa/>
            </div>
            <div className='bg-pink-100 mt-[-100px]'>
              <OurServices/>
              <PricePlans/>
              <PhotoGallary/>
            </div>
            <div className=' bg-[#f3efef]'>
              <MakeApponintment/> 
            </div>
        </Layout>
    </main>
  )
}
