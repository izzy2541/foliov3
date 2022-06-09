import { Route, Routes } from 'react-router-dom';
import React from 'react';

import cursor from './cursors'



import Navbar from './components/common/Nav'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'
import Work from './components/pages/Work'
import Irk from './components/pages/Details/Irk'
import GreenHouse from './components/pages/Details/GreenHouse'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'




function App() {
  return (
    <div className="App" element={<cursor/>}>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/work" element={<Work/>} />
       <Route path="/work/irk" element={<Irk/>} />
       <Route path="/work/greenhouse" element={<GreenHouse/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
