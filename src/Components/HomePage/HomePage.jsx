import React, { useContext } from 'react'
import NavBar from './Navbar/NavBar'
import { Outlet } from 'react-router-dom'

const HomePage = () => {


  return (
    <div className='flex flex-col gap-8' >
      <NavBar/>
      <Outlet/>
      
    </div>
  )
}

export default HomePage