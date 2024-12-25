import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import MenuModal from './MenuModal';
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";

const MenuVarieties = () => {

    const [selectedMenu, setSelectedMenu] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleVarietiesClick = (menu) => {
        setSelectedMenu(menu);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMenu(null);
    };

    const location = useLocation();
    const coffee = location.state?.coffee;

    if (!coffee) return;

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen mt-24">
                <div className="p-8">
                    <h2 className="text-4xl font-bold text-yellow-900 text-center mb-10">{coffee.name} Varieties</h2>
                    <div className="my-10 w-[64rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {coffee?.varieties?.map((variety, index) => (
                            <div key={index} className="bg-yellow-100 m-4 w-full p-4 rounded-lg shadow-md flex flex-col items-center">
                                <img src={variety.image} alt={variety.name} className="w-full h-36 object-cover mb-2 rounded-t-lg" />
                                <button className='-mt-36 mb-[6.5rem] ml-36 bg-black opacity-80 p-2 rounded-lg text-white'><FaRegHeart className='w-5 h-5 ' /></button>
                                <span className="text-yellow-700 font-semibold pb-4">{variety.name}</span>
                                <button onClick={() => handleVarietiesClick(variety)} className="bg-yellow-900 hover:bg-yellow-700 px-4 py-2 rounded-full text-white">View</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MenuModal isOpen={isModalOpen} onClose={closeModal} menu={selectedMenu} />
        </div>
    );
};

export default MenuVarieties;