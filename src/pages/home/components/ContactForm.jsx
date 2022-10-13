import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from '../../../setup/firebase'

const ContactForm = () => {

    const submitForm = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        const phone = e.target[3].value;
        const message = e.target[4].value;
        const payload = { name, lastName, email, phone, message };

        
        // Add a new document with a generated id.
        const docRef = collection(db, "consultas")
        await addDoc(docRef, payload)
        console.log("Document written with ID: ", docRef.id);
        // navigate(`/result-${result}`)



        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''
        alert("Mensaje Enviado Correctamente")

    }

  return (
    <div className='container mx-auto grid place-content-center py-6'>
        <h4 className='text-center text-2xl md:text-4xl text-gray-800 mb-4 mt-6'> <small className='text-gray-600 uppercase'>Contactanos</small> <br /> Armamos tu presupuesto en el dia </h4>
        <form action="submit" onSubmit={(e) => submitForm(e)}
        className='py-4 space-y-4'
        >
            <div className='space-y-4 
            md:flex md:space-x-4 md:space-y-0'
            >
                <div className='flex flex-col'>
                    <label htmlFor="name"
                    className='text-gray-600 text-lg'
                    >Nombre <span className='text-red-700'>*</span> </label>
                    <input type="text" name="name" id="name" 
                    className='border-2 border-yellow-200 rounded-sm py-2 px-3 text-xl
                     focus:border-yellow-500'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="lastName"
                    className='text-gray-600 text-lg'
                    >Apellido <span className='text-red-700'>*</span></label>
                    <input type="text" name="lastName" id="lastName" 
                    className='border-2 border-yellow-200 rounded-sm py-2 px-3 text-xl
                     focus:border-yellow-500'
                    />
                </div>
            </div>

            <div className='space-y-4 
            md:flex md:space-x-4 md:space-y-0'
            >
                <div className='flex flex-col'>
                    <label htmlFor="email"
                    className='text-gray-600 text-lg'
                    >Correo electronico <span className='text-red-700'>*</span> </label>
                    <input type="email" name="email" id="email" 
                    className='border-2 border-yellow-200 rounded-sm py-2 px-3 text-xl
                     focus:border-yellow-500'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone"
                    className='text-gray-600 text-lg'
                    >Telefono <span className='text-red-700'>*</span></label>
                    <input type="text" name="phone" id="phone" 
                    className='border-2 border-yellow-200 rounded-sm py-2 px-3 text-xl
                     focus:border-yellow-500'
                    />
                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="message"
                    className='text-gray-600 text-lg'
                    >Tu idea <span className='text-red-700'>*</span></label>
                <textarea type="text" name="message" id="message"  
                className='border-2 border-yellow-200 rounded-sm py-2 px-3 text-xl
                 focus:border-yellow-500'
                />
            </div>

            <div className='grid place-content-center pt-4'>
                <button type="submit"
                className='bg-yellow-500 text-white py-2 px-4 text-2xl rounded-sm shadow-md'
                >Enviar</button>
            </div>

        </form>
    </div>
  )
}

export default ContactForm