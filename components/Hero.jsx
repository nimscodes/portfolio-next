import React from 'react'
// import { saveAs } from 'file-saver';


const Hero = () => {

    const handleDownload = async () => {
        try {
          // Define the file URL and filename
          const fileUrl = '/api/resume';
          const fileName = 'resume.pdf';
    
          // Trigger the download using the custom file download utility function
          await downloadFile(fileUrl, fileName);
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <div className='max-w-[1240px] w-[90%] h-screen  p-2 flex justify-center items-center mx-auto'>
            <div className='md:w-[85%] flex flex-col p-2 gap-5'>
                <p className='text-[#5651ef] tracking-widest lowercase font-serif'>Hi, my name is </p>
                <h1 className='md:text-6xl text-gray-700 tracking-wide font-serif w-fit'>Prince Nimako,</h1>
                <h1 className='md:text-6xl text-gray-300 tracking-wide font-sans w-fit'>A Front-End Web Developer.</h1>
                <p className='text-gray-600 py-2 max-w-[70%] md:text-md font-light'>I am a front-end web developer specializing in building amazing
                    customer-focused UI. Currently, I&apos;m focused on building responsive
                    front-end web applications using React/Next.js
                    while learning back-end technologies.
                </p>
                <div className='mt-10 cursor-pointer uppercase text-lg text-[#5651ef] p-3 w-fit border-2 border-[#5651ef] hover:bg-[#5651ef] hover:text-white ease-in duration-300'>
                    Download my resume
                </div>
            </div>
        </div>

    )
}

export default Hero