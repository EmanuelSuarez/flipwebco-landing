import React from 'react'
import { Link } from 'react-router-dom'
import typescriptLogo from '../../../img/ts-logo.svg'
import firebaseLogo from '../../../img/firebase-logo.svg'
import reactLogo from '../../../img/react-logo.svg'
import nodejsLogo from '../../../img/nodejs-logo.svg'

const Hero = () => {
  return (
    <>



        <div className='absolute top-0 left-0'>


            <header className='h-16 w-8/12 2xl:w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between'>
                <Link to={'/'} className="flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" version="1.1" viewBox="0 0 400 400">
                    <g fillRule="evenodd" stroke="none">
                        <path className="fill-yellow-500" d="M88.496 29.704c-6.194 6.2-8.096 8.337-8.096 9.1 0 .792 16.525 17.521 80.6 81.596 44.33 44.33 80.6 80.87 80.6 81.2 0 .33-36.27 36.87-80.6 81.2-64.788 64.787-80.6 80.798-80.6 81.613 0 1.435 15.382 16.787 16.821 16.787 1.107 0 179.979-178.494 179.979-179.599C277.2 200.813 97.984 21.6 97.196 21.6c-.332 0-4.247 3.647-8.7 8.104m67 .199c-4.772 4.777-8.296 8.616-8.296 9.039 0 .444 31.951 32.673 80.8 81.502 44.44 44.421 80.8 80.962 80.8 81.201 0 .24-36.36 36.771-80.8 81.182-48.161 48.129-80.8 81.039-80.8 81.472 0 1.001 16.015 16.901 17.023 16.901C165.15 381.2 344 202.526 344 201.599 344 200.943 164.852 21.6 164.196 21.6c-.222 0-4.137 3.737-8.7 8.303"></path>
                    </g>
                </svg> <p className='text-xl text-yellow-500'>Flipwebco</p>
                </Link>
                <ul className='flex space-x-4 items-center mt-1 xl:space-x-8'>
                    <li className='text-gray-800 text-sm'>Inicio</li>
                    <li className='text-gray-800 text-sm'>Que hacemos</li>
                    <li className='text-gray-800 text-sm'>Como lo hacemos</li>
                    <li className='text-gray-800 text-sm'>Portfolio</li>
                    <li className='text-gray-800 text-sm'>Precios</li>
                    <li className='text-gray-800 text-sm bg-yellow-500 py-1 px-2 rounded-sm'>Contacto</li>
                </ul>
            </header>
            

            <main className='w-screen grid place-content-center sm:h-[296px] md:h-[370px] lg:h-[514px] xl:h-[659px] 2xl:h-[786px]' >
                <div className='w-[350px] md:w-[400px] lg:w-[480px] xl:w-[600px] xl:pt-20 2xl:w-[720px] mx-auto p-8 flex flex-col space-y-2 md:space-y-4 lg:space-y-6'>
                    <h1 className='text-2xl lg:text-3xl xl:text-6xl text-center'>Desarrollamos la solucion <span className='text-yellow-500'>Perfecta</span> para tu negocio</h1>
                    <p className='text-center mx-auto xl:w-4/6 2xl:text-lg'>No usamos plantillas, ni plugins. Hacemos todo <span className='text-yellow-500'>A TU MEDIDA.</span>
                    <span className='hidden lg:inline'>Implementando las mejores tecnologias
                    y metodologias para transmitir al 100% el valor de tu marca </span> </p>
                    <div className='flex justify-around mx-auto items-center space-x-4'>
                        <a className='bg-yellow-500 py-1 px-2 2xl:py-2 2xl:px-4 rounded-md' href="#contact">Contactanos</a>
                        <a className='underline' href="#portfolio">Nuestro trabajo</a>
                    </div>
                </div>
            </main>


        </div>




        {/* Background */}
        <div className=' z-20 bg-gray-300 sm:bg-hero-md sm:bg-opacity-0 container sm:h-[360px] md:h-[434px] lg:bg-hero-lg lg:h-[578px] 
         xl:bg-hero-xl xl:h-[723px] 2xl:h-[850px] mx-auto bg-cover bg-center'></div>

         <div className='container mx-auto flex justify-center space-x-12 py-8'>
            <img className='sm:h-6 md:h-8 lg:h-12 xl:h-14 2xl:h-20' src={firebaseLogo} alt="firebase logo"/>
            <img className='sm:h-6 md:h-8 lg:h-12 xl:h-14 2xl:h-20' src={reactLogo} alt="react js logo"/>
            <img className='sm:h-6 md:h-8 lg:h-12 xl:h-14 2xl:h-20' src={nodejsLogo} alt="node js logo"/>
            <img className='sm:h-6 md:h-8 lg:h-12 xl:h-14 2xl:h-20' src={typescriptLogo} alt="typescript logo"/>
         </div>
        
    </>
  )
}

export default Hero