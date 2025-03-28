import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    age: '',
    price: '',
    image: '',
    description:''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://67e5612e18194932a585c9f9.mockapi.io/book/book', book);
      alert('Book added successfully!');
      setBook({ title: '', author: '', age: '', price: '', image: '', description:'' });
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book. Please try again.');
    }
  };

  return (
    <div className='h-[70vh] w-[100%] flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col border-4 rounded-md w-[50%] h-[60vh] gap-3 items-center justify-center'>
        <label className='self-start ml-10 font-medium'>Enter The Book Title</label>
        <input name='title' value={book.title} onChange={handleChange} className='border w-[70%] p-2 rounded' type='text' required />
        
        <label className='self-start ml-10 font-medium'>Enter The Author Name</label>
        <input name='author' value={book.author} onChange={handleChange} className='border w-[70%] p-2 rounded' type='text' required />
        
        <label className='self-start ml-10 font-medium'>Enter The Author Age</label>
        <input name='age' value={book.age} onChange={handleChange} className='border w-[70%] p-2 rounded' type='number' min='10' max='100' required />
        
        <label className='self-start ml-10 font-medium'>Enter The Book Price</label>
        <input name='price' value={book.price} onChange={handleChange} className='border w-[70%] p-2 rounded' type='number' required />
        
        <label className='self-start ml-10 font-medium'>Enter The Image URL</label>
        <input name='image' value={book.image} onChange={handleChange} className='border w-[70%] p-2 rounded' type='text' required />

        <label className='self-start ml-10 font-medium'>Enter The Book Description</label>
        <input name='description' value={book.description} onChange={handleChange} className='border w-[70%] p-2 rounded' type='text' required />
        
        <button type='submit' className='border-2 rounded-lg w-[30%] py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition'>Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
