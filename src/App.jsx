import React from 'react';
import './App.css'
import HomePage from './Components/HomePage/HomePage';
import BookContext from './Components/Context/BookContext';
import BookRoutes from './Components/Routes/BookRoutes';

function App() {

  return (
    <BookContext>  
      <BookRoutes>
    <HomePage/>
    </BookRoutes> 
    </BookContext>
   )
}

export default App
