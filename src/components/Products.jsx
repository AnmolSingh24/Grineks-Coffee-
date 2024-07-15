import espressoRoast from "../assets/product3.jpg"
import organicCoffee from "../assets/product5.webp"
import mochaJava from "../assets/product10.jpg"
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Products = () => {

  const products = [
    { id: 1, image: espressoRoast, name: 'Espresso Roast', description: 'Dark roast with a bold and intense flavor, perfect for espresso lovers.' },
    { id: 2, image: organicCoffee, name: 'Organic Coffee', description: 'Grown without synthetic pesticides or fertilizers for a pure taste.' },
    { id: 3, image: mochaJava, name: 'Mocha Java', description: 'A classic blend with chocolatey undertones and a smooth finish.' },
  ];

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='my-8'>
        <div>
          <h1 className='text-center font-bold text-4xl text-yellow-900'>Products</h1>
        </div>
        <div className='my-10 w-[65rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {products.map((item, index) => (
            <div key={index} className='p-4 rounded-lg shadow-lg'>
              <img src={item.image} alt={item.name} className='w-full h-64 object-cover mb-4 rounded-t-lg' />
              <h2 className='text-2xl text-center font-semibold text-yellow-900'>{item.name}</h2>
              <p className='mt-2 text-yellow-800'>{item.description}</p>
              <p className='mt-2 text-yellow-700 font-bold'>{item.price}</p>
              <div className='text-center flex justify-center items-center gap-4'>
                <button className='bg-yellow-900 hover:bg-yellow-800 px-6 py-2 rounded-full text-white'>Buy Now</button>
                <button className='bg-yellow-900 hover:bg-yellow-800 px-6 py-2 rounded-full text-white'>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <Link to='ProductList'>
            <button className='w-40 flex justify-center items-center gap-4 bg-yellow-900 hover:bg-yellow-700 px-6 py-2 rounded-full text-white'>
              View All <FiArrowRightCircle className='w-6 h-6' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;