import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'


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
      <section className='w-[90%]  h-[80vh] m-auto  sm:flex'>

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

      {/* #section2 */}
      <section className='w-[90%]   border-red-500 border-solid border-[2px] m-auto sm:flex justify-between mobile:flex-wrap'>
        <Card1 img={"src/assets/circle sec- (1).png"} title={"Expert instruction"} innerTxt={"The gradual accumulation of  information about atomic and   small-scale behaviour..."} />
        <Card1 img={"src/assets/circle sec- (2).png"} title={"Expert instruction"} innerTxt={"The gradual accumulation of  information about atomic and   small-scale behaviour..."} />
        <Card1 img={"src/assets/circle sec-.png"} title={"Expert instruction"} innerTxt={"The gradual accumulation of  information about atomic and   small-scale behaviour..."} />
      </section>


      {/* #section3 */}
      <section className='w-[90%] h-[15vh] border-red-600 border-solid border-[2px] m-auto flex justify-evenly mt-[20px]  '>
        <div>
          <h1 className='text-[50px] text-[#96BB7C] font-bold'>15K</h1>
          <p className='text-[#252B42] text-[14px] font-medium'>Happy Customers</p>
        </div>
        <div>
          <h1 className='text-[50px] text-[#96BB7C] font-bold'>150K</h1>
          <p className='text-[#252B42] text-[14px] font-medium'>Happy Customers</p>
        </div>
        <div>
          <h1 className='text-[50px] text-[#96BB7C] font-bold'>15K</h1>
          <p className='text-[#252B42] text-[14px] font-medium'>Happy Customers</p>
        </div>
        <div>
          <h1 className='text-[50px] text-[#96BB7C] font-bold'>100+</h1>
          <p className='text-[#252B42] text-[14px] font-medium'>Happy Customers</p>
        </div>

      </section>

      {/* #section4 */}
      <section className='w-[90%] h-[70vh] border-red-600 border-solid border-[2px] mt-[20px] m-auto sm:flex'>
        {/* section4_left */}
        <div className='w-[50%] h-[70vh] border-red-400 border-solid border-[2px] flex flex-col justify-center mobile:w-[100%] sm:w-[50%]'>
          <p className='w-[15%] border-red-500 border-solid border-[2px] m-[8px]'></p>
          <h1 className='text-[30px] font-bold m-[8px]'>Every Client Matters</h1>
          <p className='text-[#737373] font-medium m-[8px]'>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics </p>
          <p className='text-[#96BB7C] font-medium m-[8px]'>Learn more</p>
        </div>
        {/* section4_right */}
        <div className='w-[50%] h-[70vh] border-red-400 border-solid border-[2px] flex justify-center items-center mobile:w-[100%] sm:w-[50%]'>
          <img className='w-[90%] h-[70vh]' src='src/assets/2.jpg' />
        </div>
      </section>


      {/* section5 */}
      <section className='w-[100%] h-[120vh] bg-[#FFF2F3]'>
        {/* section5_card */}
        <div className='w-[85%] h-[120vh] border-red-500 border-solid border-[2px] m-auto'>
          {/* section5_card_top */}
          <div className='w-[100%] h-[40vh] border-red-500 border-solid border-[2px] flex flex-col justify-center '>
            <p className='text-[#96BB7C] font-medium m-[10px]'>Practice Advice</p>
            <h1 className='text-[30px] font-bold m-[10px]'>Our Experts Teacher</h1>
            <p className='text-[#737373] m-[10px] font-medium' >Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        
        {/* Card2 */}
        <Card2/>
        <Card2/>
        <Card2/>

        </div>
      </section>


    </>
  )
}

export default App
