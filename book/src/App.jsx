
import { useEffect } from 'react'
import './App.css'


function App() {
  useEffect(()=>{
    fetch("https://www.googleapis.com/books/v1/volumes?q=a&key=AIzaSyCOmPQmwRZNuoQghYOw0Ftq8wZn9VxgasA")
    .then(res=>res.json())
    .then(data=> console.log(data.items))
    .catch(err=>console.log(err))
  })


  return (
    <>
     
    </>
  )
}

export default App
