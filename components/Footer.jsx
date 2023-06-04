import React from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import { GiEternalLove } from "react-icons/gi";

const Footer = () => {
  return (
    <div
      id="contact"
      className="max-w-[1240px] px-2 md:px-10 flex items-center justify-center lg:mx-auto mb-10"
    >
      <div className="md:w-[95%] w-full flex flex-col p-5 gap-20 items-center text-center">
        <div className="md:hidden w-[500px]">
          <h2 className="text-4xl font-light text-gray-500">
            Living, learning, & leveling up one day at a time
          </h2>
        </div>
        <div className="md:hidden flex items-center justify-between text-[#5651ef] gap-10">
          <Link
            href="https://github.com/nimscodes"
            target="_blank"
            className="cursor-pointer text-3xl mx-2 hover:scale-105 ease-in duration-300"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/panimako/"
            target="_blank"
            className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300"
          >
            <FiLinkedin />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300"
          >
            <FiTwitter />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300"
          >
            <FiInstagram />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="cursor-pointer text-3xl mx-2 hover:scale-110 ease-in duration-300"
          >
            <FiFacebook />
          </Link>
        </div>
        <div className='flex font-light text-gray-500 text-lg'>
            Made with <span className='text-2xl text-[#5651ef] px-2'><GiEternalLove/></span> by &copy;nimscodes
        </div>
      </div>
    </div>
  );
};

export default Footer;
