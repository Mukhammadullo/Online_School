import './App.css'


function App() {
  return (
    <>

      {/*#header*/}
      <header className='w-[90%] h-[10vh] m-auto flex justify-between items-center'>
        <h1 className='font-bold text-[25px]'>Your School</h1>

        <ul className='flex md:text-[14px] mobile:hidden sm:flex '>
          <li className='text-[#737373] text-[18px] m-[8px] font-semibold'>Home</li>
          <li className='text-[#737373] text-[18px] m-[8px] font-semibold'>Product</li>
          <li className='text-[#737373] text-[18px] m-[8px] font-semibold'>Pricing</li>
          <li className='text-[#737373] text-[18px] m-[8px] font-semibold'>Contact</li>
        </ul>

        <div>
          <button className='text-[#96BB7C]'>Login</button>
          <button className='w-[140px] h-[45px]  rounded-[12px] m-[10px] font-bold bg-[#96BB7C] text-[white]'>JOIN US</button>
        </div>
      </header>


      {/* #section1 */}
      <section className='w-[90%]  h-[80vh] border-solid border-red-500 border-[2px] m-auto  sm:flex'>

        {/* section1_leftCard */}
        <div className='w-[50%] h-[80vh] flex flex-col justify-center border-red-300 border-solid border-[2px] mobile:w-[100%] sm:w-[50%]'>
          <h1 className='text-[#252B42] m-[5px] text-[40px] font-bold'>25K+ STUDENTS <br /> TRUST US</h1>
          <p className='text-[#737373]  m-[5px] text-[18px] font-bold'>Every day brings with it a fresh set of learning <br /> possibilities.</p>

          <div>
            <button className=' bg-[#96BB7C] text-[white] w-[150px] h-[8vh] border-[#96BB7C] border-solid border-[1px] m-[5px] rounded-[12px]'>Get Quote Now</button>
            <button className='text-[#96BB7C]   w-[150px] h-[8vh] border-[#96BB7C] border-solid border-[1px] m-[5px] rounded-[12px]'>Learn More</button>
          </div>

        </div>
        {/* section1_rightCard */}
        <div className='w-[50%] h-[80vh] flex  border-red-300 border-solid border-[2px] mobile:w-[100%] sm:w-[50%]'>
          <img src='src/assets/1.jpg' />
        </div>

      </section>

    </>
  )
}

export default App
