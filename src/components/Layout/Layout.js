import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <div className='w-full'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
