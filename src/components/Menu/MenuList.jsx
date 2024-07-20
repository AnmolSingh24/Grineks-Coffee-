import { useState } from 'react';
import { menuItems } from '../../constants/data.js';
import MenuVarieties from './MenuVarieties.jsx';
import Navbar from '../Navbar';

const MenuList = () => {

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
        <div>
            <Navbar />
            <div className='flex items-center justify-center min-h-screen'>
                <div className='mt-24 mb-10'>
                    <div>
                        <h1 className='text-center font-bold text-4xl text-yellow-900'>Our Menu</h1>
                    </div>
                    <div className='mt-10 w-[64rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {menuItems?.map((item, index) => (
                            <div key={index} className='bg-yellow-100 m-2 w-full p-4 rounded-lg shadow-md flex flex-col items-center'>
                                <img src={item.image} alt={item.name} className='w-52 h-40 object-cover mb-4 rounded-t-lg' />
                                <h2 className='text-2xl text-center font-semibold text-yellow-900 pb-4'>{item.name}</h2>
                                <div className='text-center'>
                                    <button onClick={() => handleVarietiesClick(item)} className='bg-yellow-900 hover:bg-yellow-700 px-6 py-2 rounded-full text-white'>View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MenuVarieties isOpen={isModalOpen} onClose={closeModal} coffee={selectedCoffee} />
                </div>
            </div>
        </div>
    )
}

export default MenuList