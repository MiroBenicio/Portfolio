import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre Mim
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[10000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Desenvolvedor Full Stack em formação, me destaco pela disciplina e perseverança.</p>
                </div>
                <div>
                    <p>Tenho 19 anos, estudo programação há quase 6 meses de maneira autodidata. Já tive contato com algumas das principais stacks do mercado, confira abaixo.</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default About