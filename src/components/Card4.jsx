import React from 'react'

const Card4 = ({ img, title, job, facebook, ins, twitter }) => {
    return (
        <div className='mobile:w-[100%] mobile:h-[120vh] sm:w-[22%] sm:h-[60vh]  rounded-[12px] shadow-xl'>
            <div>
                <img src={img}  className='w-[100%] '  />
            </div>
            <h1 className='font-bold text-[18px] text-center m-[10px]'>{title}</h1>
            <p className='text-[#737373] text-center m-[10px]'>{job}</p>

            <div className='flex justify-center'>
                <img className='m-[15px]' src={facebook} />
                <img className='m-[15px]' src={ins} />
                <img className='m-[15px]' src={twitter}/>
            </div>
        </div>
    )
}

export default Card4