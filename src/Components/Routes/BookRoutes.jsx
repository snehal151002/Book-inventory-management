import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Hero from '../HomePage/HeroSection/Hero'
import AddBook from '../add book/AddBook'
import BookDesc from '../Book description/BookDesc'

const BookRoutes = () => {
  let route = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,

        children :[
           {
            path:"/",
            element:<Hero/>
           },
           {
            path:'/addbook',
            element:<AddBook/>
           },
           {
            path:'/bookdesc',
            element:<BookDesc/>
           }
        ]
    }
  ])

  return(
    <RouterProvider router={route}/>
  )
}

export default BookRoutes