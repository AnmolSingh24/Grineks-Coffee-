import Navbar from '../components/Navbar';
import Hero from './Hero';
import Menu from '../pages/Menu/Menu';
import Products from '../pages/Product/Products';
//import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Products />
      {/* <Reviews /> */}
    </div>
  )
}

export default Home