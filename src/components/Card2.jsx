import React from 'react'

const Card2 = ({ txt1, btn1, title, txt, mid, price1, price2 }) => {
    return (

        <div className='mobile:w-[100%]  sm:w-[33%] h-[80vh] border-red-500 border-solid border-[2px] flex flex-col justify-between'>
            <div className='main w-[100%] h-[35vh] flex flex-col  justify-between p-[10px] '>
                <p className='w-[15%] h-[4vh] bg-[red] rounded-[6px] ml-[15px] font-medium   text-[white] text-center'>Sale</p>
                <div className='flex justify-center'>
                    <img src='src/assets/l.png' className='m-[10px]' />
                    <img src='src/assets/like.png' className='m-[10px]' />
                    <img src='src/assets/basket.png' className='m-[10px]' />
                </div>
            </div>


            {/* row1 */}
            <div className='flex justify-between'>
                <p className='text-[#96BB7C] font-medium text-[18px] ml-[10px]'>{txt1}</p>
                <button className='w-[50px] h-[25px] bg-[#2D4059] text-[white] rounded-[4px] mr-[10px]'>{btn1}</button>
            </div>

            {/* title */}
            <h1 className='font-bold ml-[10px] text-[24px]'>{title}</h1>

            {/* txt */}
            <p className='w-[70%] ml-[10px] font-medium text-[#737373]'>{txt}</p>

            {/* mid */}
            <p className='text-[#737373] ml-[20px] font-bold'>{mid}</p>

            {/* price */}
            <div className='flex ml-[10px]'>
                <p className='#BDBDBD font-bold'>{price1}</p>
                <p className='text-[#FFAB71] font-bold ml-[10px]'>{price2}</p>
            </div>

            {/* btn */}
            <button className='w-[150px] h-[60px] m-[10px] text-[#96BB7C] border-solid border-[#96BB7C] border-[2px] rounded-[12px]'>Learn more</button>

        </div>
    )
}

export default Card2