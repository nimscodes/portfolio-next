import React from 'react';
// import Image from 'next/image';
import { GiFrogPrince } from 'react-icons/gi'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

     const [nav, setNav] = useState(false)

     const handleNav = () => {
        setNav(!nav)
     }
     return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-6'>
                <span className='border text-[#5651e5]'>
                    <GiFrogPrince size={50} />
                </span>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 
            'fixed left-[-100%] top-0 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <span className='text-[#5651e5]'>
                                <GiFrogPrince size={45} />
                            </span>
                            <span onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'>
                                <AiOutlineClose />
                            </span>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build something great together</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-4'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/about'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/skills'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/projects'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/contact'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <span className='shadow-gray-400 shadow-lg p-3 rounded-full cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </span>
                                <span className='shadow-gray-400 shadow-lg p-3 rounded-full cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </span>
                                <span className='shadow-gray-400 shadow-lg p-3 rounded-full cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </span>
                                <span className='shadow-gray-400 shadow-lg p-3 rounded-full cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar