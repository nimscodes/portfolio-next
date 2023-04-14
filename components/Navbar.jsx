import React from 'react';
// import Image from 'next/image';
import { GiFrogPrince } from 'react-icons/gi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi'
import Link from 'next/link';
import { useState } from 'react';
import { IoMoonOutline } from 'react-icons/io5'
const Navbar = ({ darkMode, handleDarkMode }) => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-auto shadow-xl z-[1000] p-4 bg-[#ecf0f3]'>
            <div className='flex justify-between items-center w-full h-full px-2'>
                <span className='border text-[#5651e5]'>
                    <GiFrogPrince size={50} />
                </span>
                <div>
                    <ul className='hidden md:flex tracking-wide font-light items-center'>
                        <Link href='/'>
                            <li className='ml-8 text-sm uppercase hover:border-b hover:border-[#5651ef] duration-200'>Home</li>
                        </Link>
                        <Link href='#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                        <div onClick={handleDarkMode} className='text-xl ml-10 cursor-pointer'>
                            <IoMoonOutline />
                        </div>
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
                            <p className='w-[85%] md:w-[90%] py-4 font-light'>Let's build something great together</p>
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
                        <div className='pt-40 text-[#5651e5]'>
                            <p className="uppercase tracking-widest text-gray-600">Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <Link href="#" className="text-2xl mr-2 hover:scale-105 ease-in duration-300">
                                    <FiGithub />
                                </Link>
                                <Link href="#" className="text-2xl mr-2 hover:scale-110 ease-in duration-300">
                                    <FiLinkedin />
                                </Link>
                                <Link href="#" className="text-2xl mr-2 hover:scale-110 ease-in duration-300">
                                    <FiTwitter />
                                </Link>
                                <Link href="#" className="text-2xl mr-2 hover:scale-110 ease-in duration-300">
                                    <FiInstagram />
                                </Link>
                                <Link href="#" className="text-2xl mr-2 hover:scale-110 ease-in duration-300">
                                    <FiFacebook />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar