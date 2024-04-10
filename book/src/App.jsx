
import { useState } from 'react'
import './App.css'
import bookImg from './img/book.png'
import { FiSearch } from "react-icons/fi";
import Card from './components/Card';



function App() {
  const [search,setSearch] = useState("")
  const [data,setData] = useState([])
  
    function getData(value){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyCOmPQmwRZNuoQghYOw0Ftq8wZn9VxgasA&maxResults=40`)
    .then(res=>res.json())
    .then(data=> setData(data.items))
    .catch(err=>console.log(err))
    }
  
  function formSubmit(e){
    e.preventDefault()
    getData(search)
    console.log(data)

  }
  
  return (
    <>
     <div className='w-full min-h-[100vh] xl:px-60 lg:px-20 px-2 py-16 gradient text-center'>
      <div className='flex justify-center' >
        <img className='lg:w-2/5 w-3/5' src={bookImg}  />
      </div>
      <form onSubmit={formSubmit} className='flex flex-col  items-center'>
        <h2 className='text-2xl lg:text-3xl font-semibold text-brown mb-4'>Find Your Book</h2>
        <div className='w-full md:w-4/5 bg-white border border-gray-500 flex rounded-[2rem]'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-none flex-1 p-4 bg-transparent text-lg text-brown font-medium' type="text" />
          <button className='bg-orange hover:bg-opacity-90 text-white rounded-[2rem] px-8  text-xl' type='submit'>
          <FiSearch />
          </button>
        </div>
      </form>
     
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      {
        data.map((item)=>(
          <Card key={item.id} item={item} />
        ))
      } 
      </div>
      
     </div>
    </>
  )
}

export default App
