import React from 'react'
import CallToAction from './components/CallToAction'
import ContactForm from './components/ContactForm'
import DevelopmentRoadmap from './components/DevelopmentRoadmap'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurValueOffer from './components/OurValueOffer'
import Portfolio from './components/Portfolio'

const Home = () => {
  return (
    <>
        <div className='h-1 w-screen bg-red-600 sm:bg-blue-700 md:bg-yellow-600 lg:bg-green-700 xl:bg-orange-600 2xl:bg-violet-700 fixed'></div>
        <Hero/>
        <OurValueOffer/>
        <DevelopmentRoadmap/>
        <Portfolio/>
        <CallToAction/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default Home