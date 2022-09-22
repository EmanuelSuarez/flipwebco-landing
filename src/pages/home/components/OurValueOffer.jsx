import React from 'react'
import Tilt from 'react-parallax-tilt';

const OurValueOffer = () => {

  return (
      <div className='container mx-auto pb-72'>
        <h2 className='text-center md:text-4xl text-gray-800'> <small className='text-gray-600'>QUE HACEMOS?</small> <br /> Llevamos tu idea a la realidad </h2>
        <Tilt scale={1.05} perspective={2000} className="[transform-style: preserve-3d]" >
        <div className='grid place-content-center pt-12 md:py-24'>
            <div className='h-[40vh] w-[40vh] md:h-[70vh] md:w-[70vh] border-yellow-500 border-[2vh] md:border-[4vh] rounded-full scale-75 md:scale-100'>
                <div className='w-[42] md:w-[62vh]'>
                    <div className=' [transform: translateZ(60px)] w-44 h-40 md:w-[27vh] md:h-[23vh] border-2 border-black mx-auto relative bottom-24 md:bottom-20 rounded-sm bg-white shadow-lg p-3 flex flex-col justify-between ' >
                        <h2 className='text-start text-sm md:text-lg' >Websites / Landing pages</h2>
                        <h4 className='text-start text-xs md:text-sm'>Un sitio web donde mostrar tu negocio y el valor que ofrece</h4>
                        <a href="#pricing" className='text-center py-1 px-2 bg-yellow-500 text-xs md:text-sm' >Presupuesto gratis</a>
                    </div>
                </div>
                <div className='h-[12vh] relative bottom-20 md:bottom-10 grid place-content-center hover:scale-105'>
                    <h3 className='text-center text-sm md:text-3xl px-10 md:pt-6'>Contanos que necesitas y creamos la solucion precisa para 
                    impulsar tu crecimiento <span className='text-yellow-500'>SIN LIMITES</span> </h3>
                </div>

                <div className='w-auto md:w-[62vh] flex justify-between relative bottom-20 md:bottom-0 flex-nowrap'>
                    <div className=' [transform: translateZ(60px)] min-w-48 h-40 md:w-[27vh] md:h-[23vh] border-2 border-black relative right-20 rounded-sm bg-white shadow-lg p-2 flex flex-col justify-between' >
                        <h2 className='text-start text-sm md:text-lg' >E-Commerce</h2>
                        <h4 className='text-start text-xs md:text-sm'>Vende tus productos en una tienda hecha a medida</h4>
                        <a href="#pricing" className='text-center py-1 px-2 bg-yellow-500 text-xs md:text-sm ' >Presupuesto gratis</a>
                    </div>
                    <div className='hidden md:grid place-content-center'>
                        <button className='py-1 px-3 text-lg bg-yellow-600 h-12 w-28 text-white text-md hover:scale-105' >Ver Planes</button>
                    </div>
                    <div className=' [transform: translateZ(60px)] min-w-48 h-40 md:w-[27vh] md:h-[23vh] border-2 border-black relative left-20 rounded-sm bg-white shadow-lg p-2 flex flex-col justify-between' >
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