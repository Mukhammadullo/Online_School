import './App.css'
import CardOne from './components/Card/CardOne';

let data = [{ "name": 1, "title": "Hello, World!", "id": 1 }, { "name": 1, "title": "Hello, World!", "id": 2 } ]


function del(id){
  console.log(id);
  data = data.filter((e) => {
    return e.id != id
  })
}

function App() {
  return (
    <>

      {/*#header*/}
      <header className='w-[90%] h-[10vh] border-solid border-red-500 border-[3px] m-auto flex justify-between items-center sm:flex-col
      lg:flex-row'>
        <h1 className='font-bold text-[25px]'>Your School</h1>

        <ul className='flex md:text-[14px]'>
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
      
    </>
  )
}

export default App
