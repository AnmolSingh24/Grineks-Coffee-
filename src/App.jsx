import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Facility from './components/Facility';
import MenuList from './components/MenuList';
import './index.css';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menuList" element={<MenuList />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default App;