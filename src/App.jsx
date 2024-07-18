import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Facility from './components/Facility';
import MenuList from './components/MenuList';
import ProductList from "./components/Product/ProductList";
import './index.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menuList" element={<MenuList />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
    </>
  );
};

export default App;