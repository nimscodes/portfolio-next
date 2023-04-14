import React from 'react'

const Title = ({title, desc}) => {
    return (
        <div className='flex flex-col mb-8 gap-3'>
            <h3 className='text-sm uppercase font-light text-[#5651ef] tracking-widest'>{title}</h3>
            <h1 className=' text-gray-500 '>{desc}</h1>
            <hr className='my-2'></hr>
        </div>
    )
}

export default Title