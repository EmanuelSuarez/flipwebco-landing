import React from 'react'
import briefing from "../../../img/briefing.webp"
import propuestaComercial  from "../../../img/propuesta-comercial.webp"
import prototypes from "../../../img/boceto-y-prototipado.webp"
import developmentImg from "../../../img/desarrollo.webp"
import deploymentImg from "../../../img/despliegue.webp"
import followUp from "../../../img/seguimiento.webp"


const DevelopmentRoadmap = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className='text-center text-2xl md:text-4xl text-gray-800'>
            <h3 className='text-center text-2xl md:text-4xl text-gray-800'> <small className='text-gray-600 uppercase'>como lo hacemos?</small> <br />Esta es la forma en la que trabajamos</h3>
        </div>
    <div className="container px-5 py-4 mx-auto flex flex-wrap">
      <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center pt-[80px] sm:pt-[82px] md:pt-[120px] lg:pt-[82px]">
          <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">1</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center object-fill	">
  
  
  
  
          <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={briefing} alt="briefing" />
  
  
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h3 className="font-medium title-font text-gray-900 mb-1 text-xl">Briefing</h3>
            <p className="leading-relaxed max-w-sm md:max-w-4xl">Escuchamos tus ideas, tu vision del proyecto e intercambiamos impresiones con el objetivo de llegar a la solucion precisa que necesitas minimizando los costos y maximizando los resultados.</p>
          </div>
        </div>
      </div>
      <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">2</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
  
  
          <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={propuestaComercial} alt="propuesta comercial" />
  
  
  
  
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h3 className="font-medium title-font text-gray-900 mb-1 text-xl">Propuesta comercial</h3>
            <p className="leading-relaxed max-w-sm md:max-w-4xl">Redactamos un documento con la descripcion detallada de tu proyecto para dejar por sentadas todas las caracteristicas y funcionalidades que estaran dentro del alcance del proyecto.</p>
          </div>
        </div>
      </div>
      <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">3</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
  
  
  
          <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={prototypes} alt="boceto y protodipado" />
  
  
  
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h3 className="font-medium title-font text-gray-900 mb-1 text-xl">Boceto y prototipos</h3>
            <p className="leading-relaxed max-w-sm md:max-w-4xl">Te mostramos nuestros bocetos para que estes al tanto de la estructura de la web y como estara dispuesta la informacion. Una vez lo aceptes iniciaremos con el prototipado de alta fidelidad, en este punto tendras una semana en la que podras realizar las revisiones que necesites hasta llegar al diseño que buscabas</p>
          </div>
        </div>
      </div>
  
      <div className="flex relative pb-24 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">4</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
  
          <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={developmentImg} alt="desarrollo" />
  
  
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h3 className="font-medium title-font text-gray-900 mb-1 text-xl">Etapa de desarrollo</h3>
            <p className="leading-relaxed max-w-sm md:max-w-4xl">En este punto es donde todo se vuelve realidad, con el diseño terminado y las funcionalidades definidas nuestro equipo se encarga de construir tu proyecto utilizando las mejores metodologias y tecnologias web para conseguir el mejor resultado posible.</p>
          </div>
        </div>
      </div>
  
  
    <div className="flex relative pb-24 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">5</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
  
          <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={deploymentImg} alt="despliegue" />
  
  
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h3 className="font-medium title-font text-gray-900 mb-1 text-xl">Pruebas y despliegue</h3>
            <p className="leading-relaxed max-w-sm md:max-w-4xl">Una vez que nuestro equipo de Quality Assurance nos da el ok, llevamos tu pagina a internet dentro del plazo de entrega pactado</p>
          </div>
        </div>
      </div>
  
  
  
      <div className="flex relative pb-24 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center pb-[265px] sm:pb-[160px] md:pb-[150px] lg:pb-[160px]">
          <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">6</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
  
          <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={followUp} alt="seguimiento" />
  
  
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h3 className="font-medium title-font text-gray-900 mb-1 text-xl">Seguimiento</h3>
            <p className="leading-relaxed max-w-sm md:max-w-4xl">A medida que tu negocio crece, podras contar con nosotros para trabajar en las nuevas oportunidades de mejora</p>
          </div>
        </div>
      </div>
  
  
      </div>
  
  </section>
  )
}

export default DevelopmentRoadmap