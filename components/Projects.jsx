import React from 'react'
import Title from './layout/Title'
import project1Image from '../public/assets/images/projects/project1.png'
import Image from 'next/image'
import { FaGlobe, FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <div id='projects'className='max-w-[1240px] px-2 md:px-10 flex items-center justify-center min-h-screen lg:mx-auto mb-10'>
            <div className='md:w-[95%] w-full flex flex-col p-5 gap-7'>
                <Title title='Projects' desc='what i have done' />
                <div className='md:grid md:grid-cols-2 lg:grid-cols-2 gap-5 '>
                    {
                        [1, 2, 3, 4].map((item, index) => {
                            return (
                                <div className='flex flex-col gap-4 shadow-lg p-3 mb-4' key={index}>
                                    <div className='w-full h-[80%] overflow-hidden'>
                                        <Image
                                            src={project1Image}
                                            className='w-full h-50 object-cover hover:scale-110 duration-300 cursor-pointer'
                                            alt='project1'
                                            />
                                    </div>
                                    <div className='flex justify-between items-center gap-3'>
                                        <h3 className='uppercase font-normal text-[#5651ef]'>The Muvents App</h3>
                                        <div className='flex gap-2'>
                                            <span>
                                                <FaGlobe className='cursor-pointer text-gray-500 hover:text-[#5651ef] hover:scale-105 ease-in duration-300 text-xl' />
                                            </span>
                                            <span>
                                                <FaGithub className='cursor-pointer text-gray-500 hover:text-[#5651ef] hover:scale-105 ease-in duration-300 text-xl' />
                                            </span>
                                        </div>
                                    </div>
                                    <p className='font-light text-sm my-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                            )
                        }
                        )
                    }   
                </div>
            </div>
        </div>
    )
}

export default Projects 