import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import MenuVarieties from './MenuVarieties';
import { MENU } from '../../constants/data';

const Menu = () => {
    const [selectedCoffee, setSelectedCoffee] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleVarietiesClick = (coffee) => {
        setSelectedCoffee(coffee);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCoffee(null);
    };

    return (
        <div className='flex items-center justify-center mb-10'>
            <div className='my-8'>
                <h1 className='text-center font-bold text-4xl text-yellow-900'>Menu</h1>
                <div className='my-10 w-[64rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {MENU.map((item, index) => (
                        <div key={index} className='bg-yellow-100 m-4 w-full p-4 rounded-lg shadow-md flex flex-col items-center'>
                            <img src={item.image} alt={item.name} className='w-52 h-40 object-cover mb-4 rounded-t-lg' />
                            <h2 className='text-2xl text-center font-semibold text-yellow-900 mb-4'>{item.name}</h2>
                            {/* <p className='m-4 text-center text-yellow-700 font-bold'>{item.price}</p> */}
                            <div className='text-center'>
                                <button onClick={() => handleVarietiesClick(item)}
                                    className='bg-yellow-900 hover:bg-yellow-800 px-6 py-2 rounded-full text-white'
                                >
                                    View
                                </button>
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
                <MenuVarieties isOpen={isModalOpen} onClose={closeModal} coffee={selectedCoffee} />
            </div>
        </div>
    );
};

export default Menu;