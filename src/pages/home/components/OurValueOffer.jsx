import React from 'react'
import Tilt from 'react-parallax-tilt';

const OurValueOffer = () => {

  return (
      <div id='valueOffer' className='container  mx-auto h-auto space-y-6 '>
        <h2 className='text-center text-2xl md:text-4xl text-gray-800'> <small className='text-gray-600 font-semibold '>QUE HACEMOS?</small> <br className='' /> Llevamos tu idea a la realidad </h2>
        <Tilt scale={1.05} perspective={2000} className="[transform-style: preserve-3d]" >

        <div className='grid place-content-center pt-12 md:py-24'>
            
            {/* circle */}
            <div className='h-72 w-72  border-amber-300 border-[2vh] md:border-[4vh] rounded-full scale-75
            sm:h-96 sm:w-96 
            md:h-[700px] md:w-[700px]  md:scale-75
            lg:h-[650px] lg:w-[650px]'
            >

                {/* top card */}
                <div className=' relative w-[42]
                 md: 
                 lg:right-0'>
                    <div className=' hover:scale-105 w-44 h-40 border-gray-300 bg-gray-100 mx-auto relative bottom-24 rounded-lg  bg-white shadow-lg p-3 flex flex-col justify-between border-2
                    sm:bottom-12
                    md:w-72 md:h-64 md:bottom-20 ' >
                        <h2 className='text-start text-sm md:text-xl font-bold p-2' >Websites / Landing pages</h2>
                        <h4 className='text-start text-xs p-4 text-gray-800 md:text-xl'>Un sitio web donde mostrar tu negocio y el valor que ofrece</h4>
                        <a href="#cta" className='text-center py-1 px-2 bg-amber-400 rounded-lg text-xs md:text-xl' >Presupuesto gratis</a>
                    </div>
                </div>
                
                {/* inner text */}
                <div className='h-[100px] relative bottom-20  grid place-content-center hover:scale-105
                sm:bottom-10 sm:h-28
                md:bottom-10 md:h-44
                '>
                    <h3 className='text-center text-sm sm:text-lg md:text-3xl px-10 md:pt-6'>Contanos que necesitas y creamos la solucion precisa para 
                    impulsar tu crecimiento <span className='text-yellow-500'>SIN LIMITES</span> </h3>
                </div>

                {/* bottom cards */}
                <div className='w-auto flex relative bottom-20 right-[29px] shrink-0
                sm:left-5 sm:bottom-10
                md:w-full md:bottom-0 md:left-8
                lg:left-0'>

                    {/* left card */}
                    <div className=' hover:scale-105 w-40 h-40 shrink-0 border-2 border-gray-300 relative right-20 bg-gray-100 rounded-lg bg-white shadow-lg p-2 flex flex-col justify-between
                    md:w-72 md:h-64 ' >
                        <h2 className='text-center font-bold text-sm md:text-xl' >E-Commerce</h2>
                        <h4 className='text-start text-sm p-4 text-gray-800 md:text-xl'>Vende tus productos en una tienda hecha a medida</h4>
                        <a href="#cta" className='text-center py-1 px-2 bg-amber-400 rounded-lg text-xs md:text-xl ' >Presupuesto gratis</a>
                    </div>

                    {/* right card */}
                    <div className=' hover:scale-105 w-40 h-40 shrink-0 border-2 border-gray-300 relative left-20 rounded-lg  bg-gray-100 shadow-lg p-2 flex flex-col justify-between
                    md:w-72 md:h-64' >
                        <h2 className='text-center font-bold text-sm md:text-xl' >Web Apps a medida </h2>
                        <h4 className='text-start text-gray-800 p-4 text-sm md:text-xl'>Lo que sea, lo hacemos con las mejores tecnologias</h4>
                        <a href="https://gestion-flipweb.web.app/" className='text-center py-1 px-2 rounded-lg bg-amber-400 text-xs md:text-xl' >Ver mas</a>
                    </div>
                </div>

            </div>
        </div>
            </Tilt>
    </div>
  )
}

export default OurValueOffer