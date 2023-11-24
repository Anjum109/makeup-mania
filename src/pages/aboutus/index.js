import AboutUsBanner from '@/components/AboutUS/Banner/AboutUsBanner'
import SecAboutusBanner from '@/components/AboutUS/Banner/SecAboutusBanner'
import Feature from '@/components/AboutUS/Feature/Feature'
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
                    <SecAboutusBanner />
                    <Feature />
                </div>
            </Layout>
        </main>
    )
}
