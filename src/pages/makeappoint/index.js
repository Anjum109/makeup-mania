import Layout from '@/components/Layout/Layout'
import MakeApponintment from '@/components/MakeAppointment/MakeApponintment'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <main>
      <Head>
        <title>Make Appointment</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="favicon.png" sizes="any" />
      </Head>
      <Layout>
        <MakeApponintment />
      </Layout>
    </main>
  )
}
