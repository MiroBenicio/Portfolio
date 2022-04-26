import React from 'react'

const Work = () => {
  return (
    <div className='w-full md:h-screen bg-[#0a192f] text-gray-300' name="work">
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8'>
               
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Meus Trabalhos</p>

                <p className='py-6 '>// Conheça um pouco do meus projetos recentes.</p>

            </div>

          {/* Container */}
            <div 
             className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
               
                {/* grid item */}
                <div  style={{background:'#484c4b'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 <div className='text-center'>
                    <span className='group-hover:invisible text-2xl font-bold tracking-wider text-center text-gray-300'>
                        Clone da Netflix
                    </span>

                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                
                        <div className='text-center'>
                            <a href="https://mirobenicio.github.io/NetflixClone/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/MiroBenicio/NetflixClone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                            </a>
                        </div>
                    </div>
                  </div>  
                </div>
                <div  style={{background:'#484c4b'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 <div className='text-center'>
                    <span className='group-hover:invisible text-2xl font-bold tracking-wider text-center text-gray-300'>
                        Clone da Home do Instagram
                    </span>

                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                
                        <div className='text-center'>
                            <a href="https://mirobenicio.github.io/HomeInstagram/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/MiroBenicio/HomeInstagram">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                            </a>
                        </div>
                    </div>
                  </div>  
                </div>
                <div  style={{background:'#484c4b'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 <div className='text-center'>
                    <span className='group-hover:invisible text-2xl font-bold tracking-wider text-center text-gray-300'>
                        Single Page - Doceria
                    </span>

                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                
                        <div className='text-center'>
                            <a href="https://mirobenicio.github.io/doceriaSinglePage/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/MiroBenicio/doceriaSinglePage">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                            </a>
                        </div>
                    </div>
                  </div>  
                </div>
                {/* grid item */}
                <div  style={{background:'#484c4b'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 <div className='text-center'>
                    <span className='group-hover:invisible text-2xl font-bold tracking-wider text-center text-gray-300'>
                        CRUD em PHP
                    </span>

                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                
                        <div className='text-center'>
                           {/*  <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/MiroBenicio/CRUD-test">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                            </a>
                        </div>
                    </div>
                  </div>  
                </div>
                <div  style={{background:'#484c4b'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 <div className='text-center'>
                    <span className='group-hover:invisible text-2xl font-bold tracking-wider text-center text-gray-300'>
                        Página de QR Code
                    </span>

                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                
                        <div className='text-center'>
                            <a href="https://mirobenicio.github.io/Qr-Code-Challenge/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/MiroBenicio/Qr-Code-Challenge">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                            </a>
                        </div>
                    </div>
                  </div>  
                </div>
                <div  style={{background:'#484c4b'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 <div className='text-center'>
                    <span className='group-hover:invisible text-2xl font-bold tracking-wider text-center text-gray-300'>
                        Aplicação em Angular
                    </span>

                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                
                        <div className='text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/MiroBenicio/first-angular-project">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                            </a>
                        </div>
                    </div>
                  </div>  
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Work