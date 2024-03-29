import React from "react";
import { Link } from "react-router-dom";
import Imac from "../../../../src/img/iPhone 13.svg"

function Quiz (){
    return (
        <div classNameName="bg-gray-100 mt-28 sm:mt-0">


<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center ml-20 lg:ml-44 rounded w-3/5" alt="hero" src={Imac}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-800 uppercase">Descubri el servicio que necesitas 
        <br className="hidden lg:inline-block"/> con nuestro quiz gratuito
      </h1>
      <p className="mb-8 leading-relaxed text-center">Diseñamos un quiz de dos minutos para que puedas saber que tipo de software es el mas conveniente de acuerdo a tu tipo de negocio o empresa </p>
      <div className="flex justify-center">
     <a href="https://quiz.flipwebco.com/"> <button className="inline-flex text-white bg-amber-300 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">Hacer quiz</button> </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )
    }

export default Quiz;