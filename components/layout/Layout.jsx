import Link from 'next/link';
import React from 'react'
import {FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiFacebook} from 'react-icons/fi'


const Layout = ({children}) => {
  return (
    <div className='w-full h-screen'>
       <SocialMediaIcons />
       {children}
    </div>
  )
}

export default Layout

const SocialMediaIcons = () => {
    return (
      <div className="hidden fixed bottom-0 transform mx-5  py-2 text-[#5651ef] md:flex flex-col items-center gap-5">
        <Link href="https://github.com/nimscodes" target="_blank" className="cursor-pointer text-3xl mx-2 hover:scale-105 ease-in duration-300">
          <FiGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/panimako/" target="_blank" className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300">
          <FiLinkedin />
        </Link>
        <Link href="/" target="_blank" className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300">
          <FiTwitter />
        </Link>
        <Link href="/" target="_blank" className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300">
          <FiInstagram />
        </Link>
        <Link href="/" target="_blank" className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300">
          <FiFacebook />
        </Link>
        <div className='border border-dashed border-[#5651ef] h-[120px]'></div>

      </div>
    );
 };

