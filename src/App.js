import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Video from './pages/Video/Video';
import Home from './pages/Home/Home';

function App() {
  const [sidebar, setSidebar] = useState(true);
  

  return (
    <div>
      <Navbar
        sidebar={sidebar}
        setSidebar={setSidebar}
       />
      <Routes>
      <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/search/:searchQuery" element={<Home sidebar={sidebar}/>} /> 
      </Routes>
    </div>
  );
}

export default App;
