import React from 'react'
import FunctionalComponents from './components/FunctionalComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoriteBooks from './components/pages/FavoriteBooks';
import About from './components/pages/About';
import AllBooks from './components/pages/AllBooks';
import Navbar from './components/pages/NavBar';

export default function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<AllBooks />} />
        {/* <Route path="/favorites" element={<FavoriteBooks />} /> */}
        <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>


    </div>
  )
}
