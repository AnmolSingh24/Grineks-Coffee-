import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./components/About"
import MenuList from "./pages/Menu/MenuList"
import ProductList from "./pages/Product/ProductList"
import Facility from "./components/Facility"
import MenuVarieties from "./pages/Menu/MenuVarieties"
import Cart from "./pages/CartItem/Cart"
import ProductSummary from "./pages/Product/ProductSummary"
import AdminPanel from "./pages/Admin/AdminPanel"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menuList" element={<MenuList />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/menuVarieties" element={<MenuVarieties />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductList/ProductSummary" element={<ProductSummary />} />
        {/* <Route path="/wishList" element={<WishList />} />
        <Route path="/trackOrder" element={<TrackOrder />} /> */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  )
}

export default App
