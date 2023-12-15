import React from 'react'

const Card1 = ({ img, title, innerTxt }) => {
    return (
        <div className='w-[30%] h-[50vh] border-red-700 border-solid border-[2px] flex flex-col justify-center items-start shadow-xl'>
            <img src={img} className="m-[10px]" />
            <h1 className='text-[26px] font-bold m-[10px]' >{title}</h1>
            <h1 className='w-[20%] border-red-700 border-solid border-[2px] ml-[10px]'></h1>
            <p className='w-[60%] text-[#737373] text-[18px] m-[10px]'>{innerTxt}</p>
        </div>
    )
}

export default Card1