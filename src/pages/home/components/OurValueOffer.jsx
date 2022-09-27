import React from 'react'
import Tilt from 'react-parallax-tilt';

const OurValueOffer = () => {

  return (
      <div className='container mx-auto space-y-6'>
        <h2 className='text-center text-2xl md:text-4xl text-gray-800'> <small className='text-gray-600 uppercase'>QUE HACEMOS?</small> <br /> Llevamos tu idea a la realidad </h2>
        <Tilt scale={1.05} perspective={2000} className="[transform-style: preserve-3d]" >
        <div className='grid place-content-center pt-12 md:py-24'>
            <div className='h-72 w-72 sm:h-96 sm:w-96 md:h-[50vh] md:w-[50vh] lg:h-[70vh] lg:w-[70vh] border-yellow-500 border-[2vh] md:border-[4vh] rounded-full scale-75 md:scale-75 lg:scale-100'>
                <div className='w-[42] md:w-[62vh] relative md:right-24 lg:right-0'>
                    <div className=' hover:scale-105 w-44 h-40 md:w-[27vh] md:h-[23vh] border-2 border-black mx-auto relative bottom-24 md:bottom-20 rounded-sm bg-white shadow-lg p-3 flex flex-col justify-between ' >
                        <h2 className='text-start text-sm md:text-lg' >Websites / Landing pages</h2>
                        <h4 className='text-start text-xs md:text-sm'>Un sitio web donde mostrar tu negocio y el valor que ofrece</h4>
                        <a href="#pricing" className='text-center py-1 px-2 bg-yellow-500 text-xs md:text-sm' >Presupuesto gratis</a>
                    </div>
                </div>
                <div className='h-[12vh] relative bottom-20 md:bottom-10 grid place-content-center hover:scale-105'>
                    <h3 className='text-center text-sm md:text-3xl px-10 md:pt-6'>Contanos que necesitas y creamos la solucion precisa para 
                    impulsar tu crecimiento <span className='text-yellow-500'>SIN LIMITES</span> </h3>
                </div>

                <div className='w-auto md:w-[62vh] flex justify-between relative bottom-20 md:bottom-0 flex-nowrap md:right-24 lg:right-0'>
                    <div className=' hover:scale-105 min-w-48 h-40 md:w-[27vh] md:h-[23vh] border-2 border-black relative right-20 rounded-sm bg-white shadow-lg p-2 flex flex-col justify-between' >
                        <h2 className='text-start text-sm md:text-lg' >E-Commerce</h2>
                        <h4 className='text-start text-xs md:text-sm'>Vende tus productos en una tienda hecha a medida</h4>
                        <a href="#pricing" className='text-center py-1 px-2 bg-yellow-500 text-xs md:text-sm ' >Presupuesto gratis</a>
                    </div>
                    <div className='hidden md:grid place-content-center'>
                        <button className='py-1 px-3 text-lg bg-yellow-600 h-12 w-28 text-white text-md hover:scale-105 hidden' >Ver Planes</button>
                    </div>
                    <div className=' hover:scale-105 min-w-48 h-40 md:w-[27vh] md:h-[23vh] border-2 border-black relative left-20 rounded-sm bg-white shadow-lg p-2 flex flex-col justify-between' >
                        <h2 className='text-start text-sm md:text-lg' >Web Apps a medida</h2>
                        <h4 className='text-start text-xs md:text-sm'>Lo que sea, lo hacemos con las mejores tecnologias</h4>
                        <a href="#pricing" className='text-center py-1 px-2 bg-yellow-500 text-xs md:text-sm' >Presupuesto gratis</a>
                    </div>
                </div>
            </div>
        </div>
            </Tilt>
    </div>
  )
}

export default OurValueOffer