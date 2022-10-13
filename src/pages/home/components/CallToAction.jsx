import React from 'react'

const CallToAction = () => {
  return (
    <section id='cta' className='bg-yellow-500 text-center'>
        <div className='flex flex-col py-6 space-y-6
        md:container md:mx-auto md:flex-row md:items-center md:justify-between md:space-y-0 md:px-4
        '>
            <div className='text-white text-xl container 
            md:text-start'>
                <h3>Listo para comenzar?</h3>
                <p className='underline'>Agenda una llamada con nosotros.</p>
            </div>

            <a 
            href='https://calendly.com/flipwebco' target="_blank" rel="noreferrer"
            className='text-xl bg-white text-yellow-500 rounded-md border-2 border-yellow-500 py-4 px-6 mx-4
            hover:text-white hover:bg-yellow-500 hover:border-white hover:text-3xl
            md:w-2/3                
            '>Agendar Llamada</a>

        </div>
    </section>
  )
}

export default CallToAction