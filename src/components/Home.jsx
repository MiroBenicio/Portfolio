import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Olá, meu nome é</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Miro Benício</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Eu sou um Desenvolvedor Full Stack.</h2>
            <p className='text-[#8892b0] py-4 max-w'>Sou um estudante do desenvolvimento web full stack,apaixonado por criar páginas e aplicações responsivas que viabilizem a conexão dentro do mundo digital.</p>
            <div>
                <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>
                
                  Meu Trabalho
                
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 hover:'/>
                </span>
                </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home