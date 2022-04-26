import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/2ccf2f1c-549c-4ef3-9814-0a6f8d43e734" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'>// Preencha o formulário abaixo ou envia um e-mail para: mirodantas27@gmail.com</p>
            </div>
            <input className=" p-2 bg-[#ccd6f6]" type="text" placeholder='Nome' name='name'/>
            <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder='Email' name='email'/>
            <textarea className="bg-[#ccd6f6] " name="message"  rows="10" placeholder='Escreva aqui sua mensagem...'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                Vamos trabalhar juntos!
            </button>
        </form>
    </div>
  )
}

export default Contact