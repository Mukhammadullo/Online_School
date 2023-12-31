import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'


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
      <section className='w-[90%]  mobile:h-[160vh] sm:h-[80vh] m-auto    sm:flex'>

        {/* section1_left */}
        <div className='w-[50%] sm:h-[80vh] flex flex-col justify-center  mobile:w-[100%] sm:w-[50%]'>
          <h1 className='text-[#252B42] m-[5px] text-[40px] font-bold'>25K+ STUDENTS <br /> TRUST US</h1>
          <p className='text-[#737373]  m-[5px] text-[18px] font-bold'>Every day brings with it a fresh set of learning <br /> possibilities.</p>

          <div>
            <button className=' bg-[#96BB7C] text-[white] w-[150px] h-[8vh] border-[#96BB7C] border-solid border-[1px] m-[5px] rounded-[12px]'>Get Quote Now</button>
            <button className='text-[#96BB7C]   w-[150px] h-[8vh] border-[#96BB7C] border-solid border-[1px] m-[5px] rounded-[12px]'>Learn More</button>
          </div>

        </div>
        {/* section1_right */}
        <div className='w-[50%] h-[80vh] flex  mobile:w-[100%] sm:w-[50%]'>
          <img src='src/assets/1.jpg' />
        </div>
      </section>

      {/* #section2 */}
      <section className='w-[90%]   m-auto sm:flex justify-between mobile:flex-wrap'>
        <Card1 img={"src/assets/circle sec- (1).png"} title={"Expert instruction"} innerTxt={"The gradual accumulation of  information about atomic and   small-scale behaviour..."} />
        <Card1 img={"src/assets/circle sec- (2).png"} title={"Expert instruction"} innerTxt={"The gradual accumulation of  information about atomic and   small-scale behaviour..."} />
        <Card1 img={"src/assets/circle sec-.png"} title={"Expert instruction"} innerTxt={"The gradual accumulation of  information about atomic and   small-scale behaviour..."} />
      </section>


      {/* #section3 */}
      <section className='w-[90%]  mobile:h-[25vh] sm:h-[15vh]  m-auto flex justify-evenly mt-[20px]  '>
        <div >
          <h1 className='md:text-[50px] text-[30px]  text-[#96BB7C] font-bold'>15K</h1>
          <p className='text-[#252B42] md:text-[14px] mobile:text-[12px] font-medium'>Happy Customers</p>
        </div>
        <div>
          <h1 className='md:text-[50px] text-[30px] text-[#96BB7C] font-bold'>150K</h1>
          <p className='text-[#252B42] md:text-[14px]  mobile:text-[12px] font-medium'>Happy Customers</p>
        </div>
        <div>
          <h1 className='md:text-[50px] text-[30px] text-[#96BB7C] font-bold'>15K</h1>
          <p className='text-[#252B42] text-[14px]  mobile:text-[12px] font-medium'>Happy Customers</p>
        </div>
        <div>
          <h1 className='md:text-[50px] text-[30px] text-[#96BB7C] font-bold'>100+</h1>
          <p className='text-[#252B42] text-[14px] mobile:text-[12px] font-medium'>Happy Customers</p>
        </div>

      </section>

      {/* #section4 */}
      <section className='w-[90%] mobile:h-[150vh] sm:h-[70vh]  mt-[20px] m-auto sm:flex'>
        {/* section4_left */}
        <div className='w-[50%] h-[70vh]  flex flex-col justify-center mobile:w-[100%] sm:w-[50%]'>
          <p className='w-[15%] border-red-500 border-solid border-[2px] m-[8px]'></p>
          <h1 className='text-[30px] font-bold m-[8px]'>Every Client Matters</h1>
          <p className='text-[#737373] font-medium m-[8px]'>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics </p>
          <p className='text-[#96BB7C] font-medium m-[8px]'>Learn more</p>
        </div>
        {/* section4_right */}
        <div className='w-[50%] h-[70vh] flex justify-center items-center mobile:w-[100%] sm:w-[50%]'>
          <img className='w-[90%] h-[70vh]' src='src/assets/2.jpg' />
        </div>
      </section>


      {/* section5 */}
      <section className='w-[100%] mobile:h-[350vh] sm:h-[120vh] bg-[#FFF2F3] mt-[20px]'>
        {/* section5_card */}
        <div className='w-[85%] mobile:h-[350vh] sm:h-[120vh]  m-auto'>
          {/* section5_card_top */}
          <div className='w-[100%] h-[40vh]  flex flex-col justify-center '>
            <p className='text-[#96BB7C] font-medium m-[10px]'>Practice Advice</p>
            <h1 className='text-[30px] font-bold m-[10px]'>Our Experts Teacher</h1>
            <p className='text-[#737373] m-[10px] font-medium' >Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics </p>
          </div>

          {/* Card2 */}
          <div className=' justify-between mobile:block sm:flex'>
            <Card2 txt1={'Training Courses'} btn1={'4.9'} title={'Get Quality Education'} txt={'We focus on ergonomics and meeting you where you work. It.s only a keystroke away.'} mid={'15 Sales'} price1={'$16.48'} price2={'$6.48'} />
            <Card2 txt1={'2,769 online courses	'} btn1={'4.9'} title={'Our Popular Courses'} txt={'We focus on ergonomics and meeting you where you work. It.s only a keystroke away.'} mid={'15 Sales'} price1={'$16.48'} price2={'$6.48'} />
            <Card2 txt1={'Expert instruction'} btn1={'4.9'} title={'Most Popular Courses'} txt={'We focus on ergonomics and meeting you where you work. It.s only a keystroke away.'} mid={'15 Sales'} price1={'$16.48'} price2={'$6.48'} />

          </div>
        </div>
      </section>


      {/*# section6 */}
      <section className='w-[85%] mobile:h-[40vh] sm:h-[26vh] m-auto mt-[20px]'>
        <p className='text-[#96BB7C] font-medium m-[10px]'>Practice Advice</p>
        <h1 className='text-[36px] font-bold m-[10px]'>Every Client Matters</h1>
        <p className='text-[#737373]  mobile:w-[80%] sm:w-[38%] font-medium m-[10px]'>Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics </p>
      </section>


      {/*# section7 */}
      <section className='w-[85%] sm:h-[65vh]  m-auto sm:flex justify-between items-center mobile:hidden'>
        <Card3 img={'src/assets/22.png'} txt={'Slate helps you see how many more days  you need to work to reach your financial goal for the month and year.'} />
        <Card3 img={'src/assets/22.png'} txt={'Slate helps you see how many more days  you need to work to reach your financial goal for the month and year.'} />
        <Card3 img={'src/assets/22.png'} txt={'Slate helps you see how many more days  you need to work to reach your financial goal for the month and year.'} />
      </section>

      {/*# section8 */}
      <section className='w-[85%] mobile:h-[40vh] sm:h-[26vh] m-auto mt-[20px]'>
        <p className='text-[#96BB7C] font-medium m-[10px]'>Practice Advice</p>
        <h1 className='text-[36px] font-bold m-[10px]'>Our Popular Courses</h1>
        <p className='text-[#737373]  mobile:w-[80%] sm:w-[38%] font-medium m-[10px]'>Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics </p>
      </section>

      {/*# section9 */}
      <section className='w-[85%] mobile:h-[490vh] sm:h-[80vh]  sm:flex justify-between mobile:block items-center  m-auto'>
        <Card4 img={'src/assets/user-cover-1.png'} title={'Julian Jameson'} job={'Profession'} facebook={'src/assets/facebook.png'} ins={'src/assets/instagramm.png'} twitter={'src/assets/twiter.png'} />
        <Card4 img={'src/assets/user-cover-2.svg'} title={'Julian Jameson'} job={'Profession'} facebook={'src/assets/facebook.png'} ins={'src/assets/instagramm.png'} twitter={'src/assets/twiter.png'} />
        <Card4 img={'src/assets/user-cover-3.png'} title={'Julian Jameson'} job={'Profession'} facebook={'src/assets/facebook.png'} ins={'src/assets/instagramm.png'} twitter={'src/assets/twiter.png'} />
        <Card4 img={'src/assets/user-cover-4.png'} title={'Julian Jameson'} job={'Profession'} facebook={'src/assets/facebook.png'} ins={'src/assets/instagramm.png'} twitter={'src/assets/twiter.png'} />
      </section>


      {/* #section10 */}
      <section className='w-[85%] mobile:h-[80vh] sm:h-[70vh]  m-auto flex flex-col justify-center items-center'>
        <p className='text-[#96BB7C] font-medium text-[18px]'>Newsletter</p>
        <h1 className='font-bold text-[30px] m-[10px]'>Watch our Courses</h1>
        <p className='text-[#737373] font-medium mb-[70px]'>Problems trying to resolve the conflict between  <br />
          the two major realms of Classical physics: Newtonian mechanics </p>

        <div>
          <input placeholder='Your Email' className='sm:w-[400px] mobile:w-[160px] mobile:h-[30px] sm:h-[50px] border-black-500 border-solid border-[2px] p-[5px]' />
          <button className='bg-[#96BB7C] mobile:h-[30px] sm:h-[50px] sm:w-[120px] mobile:w-[80px]  text-[white] font-medium '>Subscribe</button>
        </div>
      </section>

      {/* section11 */}
      <section className='w-[85%] h-[60vh]  flex justify-between items-center m-auto'>

        <ul>
          <li className='font-bold text-[18px]'>Company Info</li>
          <li className='font-medium text-[#737373] m-[5px] '>About Us</li>
          <li className='font-medium text-[#737373] m-[5px] '>Carrier</li>
          <li className='font-medium text-[#737373] m-[5px] '>We are hiring</li>
          <li className='font-medium text-[#737373] m-[5px] '>Blog</li>
        </ul>

        <ul>
          <li className='font-bold text-[18px]'>Legal</li>
          <li className='font-medium text-[#737373] m-[5px]' >About Us</li>
          <li className='font-medium text-[#737373] m-[5px]' >Carrier</li>
          <li className='font-medium text-[#737373] m-[5px]' >We are hiring</li>
          <li className='font-medium text-[#737373] m-[5px]' >Blog</li>
        </ul>

        <ul>
          <li className='font-bold text-[18px]'>Features</li>
          <li className='font-medium text-[#737373] m-[5px]'>Business Marketing</li>
          <li className='font-medium text-[#737373] m-[5px]'>User Analytic</li>
          <li className='font-medium text-[#737373] m-[5px]'>Live Chat</li>
          <li className='font-medium text-[#737373] m-[5px]'>Unlimited Support</li>
        </ul>

        <ul>
          <li className='font-bold text-[18px]'>Resources</li>
          <li className='font-medium text-[#737373] m-[5px]'>IOS & Android</li>
          <li className='font-medium text-[#737373] m-[5px]'>Watch a Demo</li>
          <li className='font-medium text-[#737373] m-[5px]'>Customers</li>
          <li className='font-medium text-[#737373] m-[5px]'>API</li>
        </ul>

        <ul>
          <li className='font-bold text-[18px]'>Get In Touch</li>
          <li className='font-medium text-[#737373] m-[5px]'>(480) 555-0103</li>
          <li className='font-medium text-[#737373] m-[5px]'>4517 Washington Ave. Manchester, </li>
          <li className='font-medium text-[#737373] m-[5px]'>debra.holt@example.com</li>
        </ul>
      </section>


      <footer className='w-[100%]  h-[15vh]  flex justify-between items-center bg-[#FAFAFA]'>
        <h1 className='text-[#737373] font-bold ml-[15px]'>Made With Love By Figmaland All Right Reserved </h1>

        <div className='flex mr-[15px]'>
          <img src='src/assets/facebook.png' />
          <img src='src/assets/instagramm.png' />
          <img src='src/assets/twiter.png' />
        </div>
      </footer>

    </>
  )
}

export default App
