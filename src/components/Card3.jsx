import React from 'react'

const Card3 = ({ txt, img }) => {
    return (
        <div className='mobile:w-[100%] sm:w-[30%] h-[50vh] border-red-500 border-solid border-[2px] flex flex-col justify-center items-center'>
            <img src='src/assets/3.jpg' className='w-[80%]' />
            <p className='text-[#737373] w-[60%] font-medium '>{txt}</p>

            <div className='flex'>
                <img src={img} className='m-[20px]' />
                <div className='m-[20px]'>
                    <p className='text-[#96BB7C] font-medium'>Regina Miles</p>
                    <p className='font-medium'>Designer</p>
                </div>
            </div>

        </div>
    )
}

export default Card3