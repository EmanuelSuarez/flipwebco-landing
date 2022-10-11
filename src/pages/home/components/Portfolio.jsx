import React from 'react'

const Portfolio = () => {
  return (
    <>
        <section className='space-y-16 container mx-auto pb-20'>
            <h2 className='text-center text-2xl md:text-4xl text-gray-800'> <small className='text-gray-600 uppercase'>Portfolio</small> <br />Algunos de nuestros trabajos</h2>
            
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <figure className='border-2 rounded-lg'>
                        <img
                        className='relative bottom-2 left-2 shadow-md rounded-lg h-72 w-72 md:h-86 md:w-86 lg:w-[23rem]'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVGuDbJSWRbGy2R1YjoXMB1DCFwJ17HUgf20Opn_UNaRV55fcixvnX2VVyYtO66MgDzQ&usqp=CAU" alt="imagen" />
                    </figure>
                    <div className='w-72 md:w-3/5 md:border-l-4 md:border-yellow-500 md:pl-6 text-center md:text-start flex flex-col'>
                        <strong className='text-2xl text-orange-500 mt-6'>TiendaCompleta.com</strong>
                        <small>Ecommerce + Web App</small>
                        <p className='md:max-w-2xl my-6 text-xl'>Plataforma de dropshiping en donde en menos de un minuto tenes tu tienda online lista, 
                            con todo tipo de productos y sin tener que encargarte del stock, envio ni nada.
                            Y lo mejor es que la inversion inicial es de 0 pesos!</p>
                        <a className='underline' href="https://dev.tiendacompleta.com/s/inclusivex" target="_blank" rel='noreferrer' >Visitar sitio web</a>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <figure className='border-2 rounded-lg md:hidden'>
                        <img
                        className='relative bottom-2 left-2 shadow-md rounded-lg h-72 w-72'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVGuDbJSWRbGy2R1YjoXMB1DCFwJ17HUgf20Opn_UNaRV55fcixvnX2VVyYtO66MgDzQ&usqp=CAU" alt="imagen" />
                    </figure>
                    <div className='w-72 mt-6 md:w-3/5 md:border-r-4 text-center md:text-end md:border-yellow-500 md:pr-6 flex flex-col items-center md:items-end'>
                        <strong className='text-2xl text-orange-500'>TiendaCompleta.com</strong>
                        <small>Ecommerce + Web App</small>
                        <p className='md:max-w-2xl my-6 text-xl'>Plataforma de dropshiping en donde en menos de un minuto tenes tu tienda online lista, 
                            con todo tipo de productos y sin tener que encargarte del stock, envio ni nada.
                            Y lo mejor es que la inversion inicial es de 0 pesos!</p>
                        <a className='underline' href="https://dev.tiendacompleta.com/s/inclusivex" target="_blank" rel='noreferrer' >Visitar sitio web</a>
                    </div>
                    <figure className='w-86 border-2 rounded-lg hidden md:block'>
                        <img
                        className='relative bottom-2 left-2 shadow-md rounded-lg h-72 w-72 md:h-86 md:w-86 lg:w-[23rem]'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVGuDbJSWRbGy2R1YjoXMB1DCFwJ17HUgf20Opn_UNaRV55fcixvnX2VVyYtO66MgDzQ&usqp=CAU" alt="imagen" />
                    </figure>
                </div>
            </div>

        </section>
    </>
  )
}

export default Portfolio