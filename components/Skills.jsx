import React from 'react'
import Title from './layout/Title'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiJquery, SiMongodb, SiBootstrap} from 'react-icons/si'
const Skills = () => {
    return (
        <div  id='skills' className='max-w-[1240px] px-2 md:px-10 flex items-center justify-center min-h-screen lg:mx-auto mb-10'>
            <div className='md:w-[95%] w-full flex flex-col p-5 gap-7'>
                <Title title='Skills' desc='what i can do' />
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    <div className='flex items-center justify-around p-4 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiHtml5 className='text-5xl text-[#f06529]' />
                        </span>
                        <p>
                            HTML
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-4 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiCss3 className='text-5xl text-[#2965f1]' />
                        </span>
                        <p>
                            CSS
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-3 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiBootstrap className='text-5xl text-[#563d7c]' />
                        </span>
                        <p>
                            Bootstrap
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-4 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiJavascript className='text-5xl text-[#f0db4f]' />
                        </span>
                        <p>
                            JavaScript
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-4 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                           <SiJquery className='text-5xl text-[#0769ad]' />
                        </span>
                        <p>
                            JQuery
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-4 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiReact className='text-5xl text-[#61dafb]' />
                        </span>
                        <p>
                            React
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-4 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiNextdotjs className='text-5xl text-[#000000]' />
                        </span>
                        <p>
                            Next.js
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-4 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiTailwindcss className='text-5xl text-[#06b6d4]' />
                        </span>
                        <p>
                            Tailwind CSS
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-3 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiNodedotjs className='text-5xl text-[#339933]' />
                        </span>
                        <p>
                            Node.js
                        </p>
                    </div>
                    <div className='flex items-center justify-around p-3 mb-3 rounded-xl shadow-xl shadow-gray-300'>
                        <span>
                            <SiMongodb className='text-5xl text-[#47a248]' />
                        </span>
                        <p>
                            MongoDB
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills