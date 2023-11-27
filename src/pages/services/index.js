import Layout from '@/components/Layout/Layout'
import ServiceBanner from '@/components/Services/ServiceBanner'
import ServicesTopic from '@/components/Services/ServicesTopic'
import Head from 'next/head'
import React from 'react'

export default function index() {
    return (
        <main>
            <Head>
                <title>Makeup Mania</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="icon" href="favicon.png" sizes="any" />
            </Head>
            <Layout>
                <div className='service-bg bg-[#f3efef]'>
                    <ServiceBanner />
                    <ServicesTopic />
                </div>
            </Layout>


        </main>
    )
}
