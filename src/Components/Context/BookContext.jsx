import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export let BookContext= createContext()
const Book = ({children}) => {
  let [bookData,setBookData]=useState([])

useEffect(()=>{


axios.get("https://67e5612e18194932a585c9f9.mockapi.io/book/book").then((response)=>{
     setBookData(response.data)
})

},[bookData])


  return (
 
    <BookContext.Provider value={{bookData,setBookData} }  >
      {children}
    </BookContext.Provider>

  )

}

export default Book