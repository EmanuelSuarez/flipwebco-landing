import React from 'react'

const CallToAction = () => {
  return (
    <section id='cta' className='bg-amber-400 text-center'>
        <div className='flex flex-col py-6 space-y-6
        md:container md:mx-auto md:flex-row md:items-center md:justify-between md:space-y-0 md:px-4
        '>
            <div className='text-white text-xl container 
            md:text-start'>
                <h3 className='text-gray-700'>Listo para comenzar?</h3>
                <p className='font-bold text-gray-700'>Agenda una llamada con nosotros.</p>
            </div>

            <a 
            href='https://calendly.com/flipwebco' target="_blank" rel="noreferrer"
            className='text-xl ease-out duration-300 bg-white text-yellow-500 rounded-md border-2 border-amber-500 py-4 px-6 mx-4
            hover:text-white hover:bg-amber-400 hover:border-white hover:text-3xl
            md:w-2/3                
            '>Agendar Llamada</a>

        </div>
    </section>
  )
}

export default CallToAction