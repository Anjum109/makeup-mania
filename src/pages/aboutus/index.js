import AboutUsBanner from '@/components/AboutUS/Banner/AboutUsBanner'
import SecAboutusBanner from '@/components/AboutUS/Banner/SecAboutusBanner'
import Feature from '@/components/AboutUS/Feature/Feature'
import Team from '@/components/AboutUS/TeamMember/Team'
import PhotoGallary from '@/components/HomeComp/PhotoGallary'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import React from 'react'

export default function index() {
    return (
        <main>
            <Head>
                <title>About US</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="icon" href="favicon.png" sizes="any" />
            </Head>
            <Layout>
                <div className='banner-aboutus-bg bg-[#f3efef]'>
                    <AboutUsBanner />
                    <Feature />
                    <SecAboutusBanner />
                </div>
                <div className='bg-pink-100 pt-[100px]'>
                    <Team />
                </div>
                <div className='hidden lg:block'><PhotoGallary /></div>
            </Layout>
        </main>
    )
}
