import React from 'react'
import CallToAction from './components/CallToAction'
import Clients from './components/Clients'
import ContactForm from './components/ContactForm'
import DevelopmentRoadmap from './components/DevelopmentRoadmap'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurValueOffer from './components/OurValueOffer'
import Portfolio from './components/Portfolio'
import Quiz from './components/QuizSection'

const Home = () => {
  return (
    <>
        {/* link navbar | complete portfolio | link call-to-action to calendar app | link form to firestore */}
        {/* <div className='h-1 w-screen bg-red-600 sm:bg-blue-700 md:bg-yellow-600 lg:bg-green-700 xl:bg-orange-600 2xl:bg-violet-700 fixed'></div> */}
        <Hero/>
        <OurValueOffer/>
        <Quiz/>
        <DevelopmentRoadmap/>
        <Clients/>
        {/* <Portfolio/> */}
        <CallToAction/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default Home