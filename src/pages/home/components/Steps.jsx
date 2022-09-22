import React from "react";
import Contact  from "../../../img/Contact.svg"
import Briefing from "../../../img/Briefing.svg"
import Prototypes from "../../../img/BocetoPrototipos.svg"
import DevelopmentImg from "../../../img/Development.svg"
import DeploymentImg from "../../../img/Deployment.svg"
import FollowUp from "../../../img/FollowUp.svg"

const Hero = () => {
    return (
      <>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-300 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center object-fill	">


        

        <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={Contact} alt="" />


        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Contactános</h2>
          <p class="leading-relaxed">Envianos un mensaje en la seccion de contacto y nuestro equipo se contactara con vos a la brevedad para agendar una llamada y escuchar tus consulas y lo que necesitas saber acerca de nuestros servicios.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-300 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">


        <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={Briefing} alt="" />




        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Briefing</h2>
          <p class="leading-relaxed">Escuchamos tus ideas, tu vision del proyecto e intercambiamos impresiones con el objetivo de llegar a la solucion precisa que necesitas minimizando los costos y maximisando los resultados.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-300 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
            


        <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={Prototypes} alt="" />



        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Boceto y prototipos</h2>
          <p class="leading-relaxed">Te mostramos nuestros bocetos para que estes al tanto de la estructura de la web y como estara dispuesta la informacion. Una vez lo aceptes iniciaremos con el prototipado de alta fidelidad, en este punto tendras una semana en la que podras realizar las revisiones que necesites hasta llegar al diseño que buscabas</p>
        </div>
      </div>
    </div>

    <div class="flex relative pb-24 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-300 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
         
        <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={DevelopmentImg} alt="" />


        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Etapa de desarrollo</h2>
          <p class="leading-relaxed">En este punto es donde todo se vuelve realidad, con el diseño terminado y las funcionalidades definidas nuestro equipo se encarga de construir tu proyecto utilizando las mejores metodologias y tecnologias web para conseguir el mejor resultado posible.</p>
        </div>
      </div>
    </div>


  <div class="flex relative pb-24 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-300 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
         
        <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={DeploymentImg} alt="" />


        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pruebas y despliegue</h2>
          <p class="leading-relaxed">Una vez que nuestro equipo de Quality Assurance nos da el ok, llevamos tu pagina a internet dentro del plazo de entrega pactado</p>
        </div>
      </div>
    </div>



    <div class="flex relative pb-24 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-300 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
         
        <img  className="object-cover border-solid border-4 border-amber-300 flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center " src={FollowUp} alt="" />


        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Seguimiento</h2>
          <p class="leading-relaxed">A medida que tu negocio crece, podras contar con nosotros para trabajar en las nuevas oportunidades de mejora</p>
        </div>
      </div>
    </div>


    </div>

</section>





</>
  )
}

export default Hero