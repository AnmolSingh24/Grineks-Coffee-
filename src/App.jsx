import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Facility from './pages/Facility';
import MenuVarieties from './pages/Menu/MenuVarieties';
import MenuList from './pages/Menu/MenuList';
import ProductList from "./pages/Product/ProductList";
import Cart from './pages/CartItem/Cart';
import './index.css';
import { CartProvider } from './context/CartContext';
import WishList from './WishList';
import TrackOrder from './TrackOrder';

const App = () => {

  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menuList" element={<MenuList />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/menuVarieties" element={<MenuVarieties />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductList/ProductSummary" element={<Cart />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;