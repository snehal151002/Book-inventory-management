import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
 
  let navigate= useNavigate()

 let handleAddbook=()=>{
    navigate('/addbook')
 }
let handleHome=()=>{
  navigate('/')
}
  return (
    <div className="h-[10vh] w-[100%] border border-[1px solid black] flex items-center justify-between md:justify-evenly " >
      
      <section className="font-bold md:text-3xl  text-xl  ">
        Welcome To Book Store
        </section>
      <section className="text-sm md:text-xl font-normal  w-[30%]">
        <ul className="flex gap-2 items-center justify-around w-[100%]">
          <li onClick={handleHome} className="cursor-pointer">Home</li>
          <li onClick={handleAddbook} className="cursor-pointer text-green-700 font-extrabold">Add Book</li>
        </ul>
      </section>
    
    </div>
  )
}

export default NavBar