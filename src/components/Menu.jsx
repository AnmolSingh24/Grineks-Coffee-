import { Link } from 'react-router-dom';
import espressoImage from '../assets/Menu1.avif';
import cappuccinoImage from '../assets/Menu2.avif';
import latteImage from '../assets/Menu3.jpg';
import { FiArrowRightCircle } from 'react-icons/fi';

const Menu = () => {
    const menuItems = [
        { name: 'Espresso', image: espressoImage, description: 'A tantalizingly rich and bold shot of freshly brewed espresso, crowned with a swirl of smooth, creamy foam.', price: '$3.00' },
        { name: 'Cappuccino', image: cappuccinoImage, description: 'A classic Italian coffee made with espresso, steamed milk, and topped with a frothy foam.', price: '$4.50' },
        { name: 'Latte', image: latteImage, description: 'A creamy blend of espresso and steamed milk, finished with a light foam.', price: '$4.00' }
    ];

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='my-8'>
                <div>
                    <h1 className='text-center font-bold text-4xl text-yellow-900'>Menu</h1>
                </div>
                <div className='my-10 w-[65rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {menuItems.map((item, index) => (
                        <div key={index} className='p-4 rounded-lg shadow-lg'>
                            <img src={item.image} alt={item.name} className='w-full h-64 object-cover mb-4 rounded-t-lg' />
                            <h2 className='text-2xl text-center font-semibold text-yellow-900'>{item.name}</h2>
                            <p className='mt-2 text-yellow-800'>{item.description}</p>
                            <p className='mt-2 text-yellow-700 font-bold'>{item.price}</p>
                            <div className='text-center'>
                                <button className='bg-yellow-900 hover:bg-yellow-800 px-6 py-2 rounded-full text-white'>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <Link to='MenuList'>
                        <button className='w-40 flex justify-center items-center gap-4 bg-yellow-900 hover:bg-yellow-700 px-6 py-2 rounded-full text-white'>
                            View All <FiArrowRightCircle className='w-6 h-6' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;