import React from "react";
import typescriptLogo from '../../../img/ts-logo.svg'
import Batata from '../../../img/batatabi.png'
import Yecyoc from '../../../img/yecyoc.png'
import Tecxio from '../../../img/tecxiolog.png'
import Tienda from '../../../img/tiendacompleta.png'
import Aberturas from '../../../img/aberturas.ico'
import Fix from '../../../img/fix.solu.png'


function Clients () {
    return(
        <>

<section class="text-gray-600 body-font container mx-auto">
  <div class=" px-5 py-24 ">
    <div class="flex flex-col text-center w-full ">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">Algunos de nuestros clientes</h1>
    </div>
    <div class="flex md:flex-auto mx-auto flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4 mx-auto">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={Tecxio}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
          
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={Yecyoc}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
          
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative ">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={Tienda}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
           
          </div>
        </div>
      </div>
     
      <div class="lg:w-1/3 sm:w-1/2  p-4 ">
        <div class="flex relative ">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={Fix }/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
         </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2   p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={Aberturas }/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
         
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2   p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={Batata}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
     
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">


        {/* <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</section>



        
{/* <section className="mx-auto container mb-28">
    <h4 className="uppercase text-2xl  text-center">Algunos de nuestros clientes</h4>
<div className="md:flex items-center object-contain  space-x-14 p-12">
    <div className="w-full ">
        <img className="" src={Tecxio} alt="" />
    </div>
    <div className="w-full ">
        <img className="" src={Yecyoc} alt="" />
    </div>
    <div className="w-full ">
        <img src={Tienda} alt="" />
    </div>
    <div className="w-full ">
        <img src={Aberturas} alt="" />
    </div>
    <div className="w-full ">
        <img src={Batata} alt="" />
    </div>
 </div>
   


</section> */}

        
        </>
    )
}

export default Clients;