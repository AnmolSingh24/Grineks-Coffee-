import Navbar from '..components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Products from '../components/Product/Products';
import Reviews from "../components/Reviews";
import Footer from '../components/Footer';

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