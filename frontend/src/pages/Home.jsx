import Navbar from './Navbar';
import Hero from './Hero';
import Menu from '../components/Menu/Menu';
import Products from '../components/Product/Products';
import Reviews from "./Reviews";
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Products />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home