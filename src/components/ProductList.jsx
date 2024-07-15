import coffeeBlend1 from "../assets/product1.jpg"
import singleBlendCoffee from "../assets/product2.jpg"
import espressoRoast from "../assets/product3.jpg"
import decafCoffee from "../assets/product4.webp"
import organicCoffee from "../assets/product5.webp"
import coldBrewCoffee from "../assets/product6.jpg"
import frenchRoast from "../assets/product7.webp"
import breakfastBlend from "../assets/product8.webp"
import italianRoast from "../assets/product9.png"
import mochaJava from "../assets/product10.jpg"
import hazelnutCoffee from "../assets/product11.jpg"
import pumpkinSpiceCoffee from "../assets/product12.jpg"

const ProductList = () => {

  const products = [
    { id: 1, image: coffeeBlend1, name: 'Coffee Blend 1', description: 'Our signature blend with a rich flavor profile.' },
    { id: 2, image: singleBlendCoffee, name: 'Single-Origin Coffee', description: 'Directly sourced from a single farm in Colombia.' },
    { id: 3, image: espressoRoast, name: 'Espresso Roast', description: 'Dark roast with a bold and intense flavor, perfect for espresso lovers.' },
    { id: 4, image: decafCoffee, name: 'Decaf Coffee', description: 'Enjoy the rich taste of coffee without the caffeine.' },
    { id: 5, image: organicCoffee, name: 'Organic Coffee', description: 'Grown without synthetic pesticides or fertilizers for a pure taste.' },
    { id: 6, image: coldBrewCoffee, name: 'Cold Brew Coffee', description: 'Smooth and refreshing, brewed slowly over 12 hours.' },
    { id: 7, image: frenchRoast, name: 'French Roast', description: 'Deep and smoky flavor, roasted to perfection.' },
    { id: 8, image: breakfastBlend, name: 'Breakfast Blend', description: 'Light and bright, a perfect start to your day.' },
    { id: 9, image: italianRoast, name: 'Italian Roast', description: 'Rich and full-bodied with a hint of caramelized sugar.' },
    { id: 10, image: mochaJava, name: 'Mocha Java', description: 'A classic blend with chocolatey undertones and a smooth finish.' },
    { id: 11, image: hazelnutCoffee, name: 'Hazelnut Coffee', description: 'Infused with natural hazelnut flavor for a nutty twist.' },
    { id: 12, image: pumpkinSpiceCoffee, name: 'Pumpkin Spice Coffee', description: 'Seasonal favorite with notes of cinnamon, nutmeg, and pumpkin.' },
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
              <div className='text-center'>
                <button onClick={() => addToCart(item)} className='bg-yellow-900 hover:bg-yellow-800 px-6 py-2 rounded-full text-white'>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;