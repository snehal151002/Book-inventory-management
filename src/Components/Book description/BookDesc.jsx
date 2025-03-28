import React from 'react'
import { LuIndianRupee } from 'react-icons/lu'
import { useLocation, useNavigate } from 'react-router-dom'

const BookDesc = () => {
  let location = useLocation();
  let navigate = useNavigate();

  let state = location.state || JSON.parse(localStorage.getItem("selectedBook")) || {
    title: "No Title Available",
    author: "Unknown",
    price: "N/A",
    image: "https://via.placeholder.com/150",
    description: "No description available.",
  };


  return (
    <div className='h-[90vh] w-[100%] flex flex-col md:flex-row items-start justify-around p-4'>
      <section className='h-[90%] w-[100%] md:w-[50%] flex items-center justify-center'>
        <img className='h-[80%] w-[80%] md:h-[90%] md:w-[70%]' src={state.image} alt='Book Cover' />
      </section>
      <section className='h-auto w-[100%] md:w-[50%] pl-5 flex flex-col gap-4 md:gap-5 self-start ml-5'>
      <h1 className='text-3xl  md:text-5xl ml-5 lg:text-6xl font-extrabold'>{state.title}</h1>
        <h1 className='text-lg md:text-xl lg:text-2xl'>Author: {state.author}</h1>
        <p className='flex w-[130px] text-center items-center justify-between text-lg md:text-xl'>
          Price: <LuIndianRupee className='text-lg md:text-xl' /> {state.price}
        </p>
        <p className='flex flex-col gap-3 md:gap-5'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-blue-800'>Description:</h1>
          <p className='text-lg md:text-xl text-blue-600'>{state.description}</p>
        </p>
      </section>
    </div>
  )
}

export default BookDesc;
