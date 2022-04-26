import React from 'react'
import Js from '../assets/javascript.png'
import ReactJs from '../assets/react.png'
import GitHub from '../assets/github.png'
import Angular from '../assets/angular.png'
import Php from '../assets/php.png'
import Sql from '../assets/sql.png'
import HTML from '../assets/html.png'
import Css from '../assets/css.png'



const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>Hard Skills</p>
                <p className='py-4 '>// Essas são as tecnologias que eu trabalho e estudo diariamente.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={HTML} alt="HTML Logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Css} alt="Css Logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Js} alt="Javascript Logo" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={ReactJs} alt="React Logo" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Angular} alt="Angular Logo" />
                    <p className='my-4'>Angular</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto pt-7" src={Php} alt="Php Logo" />
                    <p className='my-4'>PHP</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto pt-6" src={Sql} alt="Sql Logo" />
                    <p className='my-4'>MySql</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={GitHub} alt="Github Logo" />
                    <p className='my-4'>GitHub</p>
                </div>
                        
            </div>
        </div>
    </div>
  )
}

export default Skills