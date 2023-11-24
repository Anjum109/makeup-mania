import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import Banner from '@/components/HomeComp/Banner/Banner';
import SecondBanner from '@/components/HomeComp/Banner/SecondBanner';
import BeautySpa from '@/components/HomeComp/BeautySpa';
import OurServices from '@/components/HomeComp/OurServices';
import PricePlans from '@/components/HomeComp/PricePlans';
import PhotoGallary from '@/components/HomeComp/PhotoGallary';
import MakeAppointment from '@/components/MakeAppointment/MakeApponintment';
import { FaArrowAltCircleUp } from "react-icons/fa";
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Head>
        <title>Makeup Mania</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="favicon.png" sizes="any" />
      </Head>
      <Layout>
        <div className='banner-bg bg-[#f3efef]'>
          <Banner />
          <SecondBanner />
          <BeautySpa />
        </div>
        <div className='bg-pink-100 mt-[-100px]'>
          <OurServices />
          <PricePlans />
          <PhotoGallary />
        </div>
        <div className=' bg-[#f3efef]'>
          <MakeAppointment />
        </div>

        {showScrollButton && (
          <button
            className="scroll-to-top-button text-red-400 text-[40px] bottom-[20px] right-[20px] fixed border-none cursor-pointer flex opacity-[0.8] transition-all duration-1000"
            onClick={scrollToTop}
          >
            {/* You can use any icon or text for the button */}
            <FaArrowAltCircleUp />
          </button>
        )}
      </Layout>


    </main>
  );
}
