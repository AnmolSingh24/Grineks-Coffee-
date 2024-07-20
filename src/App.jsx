import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Facility from './components/Facility';
import MenuList from './components/Menu/MenuList';
import ProductList from "./components/Product/ProductList";
import Cart from './components/CartItem/Cart';
import ProductOrderDetails from './components/Product/ProductOrderDetails';
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductList/productOrderDetails" element={<ProductOrderDetails />} />
      </Routes>
    </>
  );
};

export default App;