import React from 'react'

const Card2 = ({ }) => {
    return (
        <div className='w-[33%] h-[80vh] border-red-500 border-solid border-[2px]'>
            <div className='main w-[100%] h-[35vh] flex flex-col  justify-between p-[10px]'>
                <p className='w-[15%] h-[4vh] bg-[red] rounded-[6px] ml-[15px] font-medium   text-[white] text-center'>Sale</p>
                <div className='flex justify-center'>
                    <img src='src/assets/l.png'       className='m-[10px]'/>
                    <img src='src/assets/like.png'    className='m-[10px]'/>
                    <img src='src/assets/basket.png'  className='m-[10px]'/>
                </div>
            </div>




        </div>
    )
}

export default Card2