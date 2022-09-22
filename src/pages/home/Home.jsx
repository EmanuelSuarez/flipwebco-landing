import React from 'react'
import Hero from './components/Hero'
import Steps from "./components/Steps"


const Home = () => {
  return (
    <>
        <div className='h-1 w-screen bg-red-600 sm:bg-blue-700 md:bg-yellow-600 lg:bg-green-700 xl:bg-orange-600 2xl:bg-violet-700'></div>
        <Hero/>
        <Steps/>
    </>
  )
}

export default Home