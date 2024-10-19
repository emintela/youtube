import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Video from './pages/Video/Video';
import Home from './pages/Home/home';
import { useState } from 'react';

function App() {

  const [sidebar,setSidebar]= useState(true)
  


  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  );
}

export default App;
