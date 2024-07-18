import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import espressoImage from '../assets/Menu1.avif';
import cappuccinoImage from '../assets/Menu2.avif';
import latteImage from '../assets/Menu3.jpg';
import mochaImage from "../assets/Mocha.png";
import americano from "../assets/Americano.webp";
import redEyeEspresso from "../assets/RedEyeEspresso.jpg";
import blackEyeEspresso from "../assets/BlackEyeEspresso.png";
import ristrettoCappuccino from "../assets/Ristretto.jpg";
import doppioEspresso from "../assets/doppioEspresso.webp"
import classicCappuccino from "../assets/classicCappuccino.avif";
import icedCappuccino from "../assets/icedCappuccino.jpg";
import vanillaCappuccino from "../assets/vanillaCappuccino.jpg";
import dryCappuccino from "../assets/dryCappuccino.webp";
import honeyCappuccino from "../assets/honeyCappuccino.webp";
import hazelnutCappuccino from "../assets/hazelnutCappuccino.avif";
import chocolateCappuccino from "../assets/chocolateCappuccino.jpg";
import icedChocolateCappuccino from "../assets/icedChocolateCappuccino.webp";
import latteMacchiato from "../assets/latteMacchiato.webp";
import icedCoffeeLatte from "../assets/icedCoffeeLatte.jpg";
import caramelLatte from "../assets/caramelLatte.jpg";
import hazelnutLatte from "../assets/hazelnutLatte.jpg";
import icedCaramelMochaLatte from "../assets/icedCaramelMochaLatte.jpg";
import mochaHazelnutLatte from "../assets/mochaHazelnutLatte.jpg";
import mochaPumpkinLatte from "../assets/mochaPumpkinLatte.jpg";
import classicMocha from "../assets/classicMocha.jpg";
import whiteChocolateMocha from "../assets/whiteChocolateMocha.jpg";
import peppermintMocha from "../assets/peppermintMocha.png";
import icedMocha from "../assets/icedMocha.jpg";
import mochaFrappuccino from "../assets/mochaFrappuccino.webp";
import { FiArrowRightCircle } from 'react-icons/fi';
import CoffeeModal from './CoffeeModal';

const Menu = () => {
    const [selectedCoffee, setSelectedCoffee] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const menuItems = [
        {
            name: 'Espresso',
            image: espressoImage,
            description: 'A tantalizingly rich and bold shot of freshly brewed espresso, crowned with a swirl of smooth, creamy foam.',
            price: '$3.00',
            varieties: [
                { image: americano, name: 'Americano', price: '$3.00' },
                { image: redEyeEspresso, name: 'Red Eye Espresso', price: '$4.00' },
                { image: blackEyeEspresso, name: 'Black Eye Espresso', price: '$5.00' },
                { image: ristrettoCappuccino, name: 'Ristretto Espresso', price: '$5.50' },
                { image: doppioEspresso, name: 'Doppio Cappuccino', price: '$6.00' }
            ]
        },
        {
            name: 'Cappuccino',
            image: cappuccinoImage,
            description: 'A classic Italian coffee made with espresso, steamed milk, and topped with a frothy foam.',
            price: '$4.50',
            varieties: [
                { image: classicCappuccino, name: 'Classic Cappuccino', price: '$4.50' },
                { image: icedCappuccino, name: 'Iced Cappuccinno', price: '$5.00' },
                { image: vanillaCappuccino, name: 'Vanilla Cappuccinno', price: '$5.50' },
                { image: dryCappuccino, name: 'Dry Cappuccinno', price: '$6.00' },
                { image: honeyCappuccino, name: 'Honey Cappuccinno', price: '$6.50' },
                { image: hazelnutCappuccino, name: 'Hazelnut Cappuccinno', price: '$7.00' },
                { image: chocolateCappuccino, name: 'Chocolate Cappuccinno', price: '$7.50' },
                { image: icedChocolateCappuccino, name: 'Iced Chocolate Cappuccinno', price: '$8.00' },
            ]
        },
        {
            name: 'Latte',
            image: latteImage,
            description: 'A creamy blend of espresso and steamed milk, finished with a light foam.',
            price: '$4.00',
            varieties: [
                { image: latteMacchiato, name: 'Latte Macchiato', price: '$4.00' },
                { image: icedCoffeeLatte, name: 'Iced Coffee Latte', price: '$4.50' },
                { image: caramelLatte, name: 'Caramel Latte', price: '$5.00' },
                { image: hazelnutLatte, name: 'Hazelnut Latte', price: '$5.50' },
                { image: icedCaramelMochaLatte, name: 'Iced Caramel Mocha Latte', price: '$5.50' },
                { image: mochaHazelnutLatte, name: 'Mocha Hazelnut Latte', price: '$5.50' },
                { image: mochaPumpkinLatte, name: 'Mocha Pumpkin Spice Latte', price: '$5.50' },
                { image: hazelnutLatte, name: 'Hazelnut Latte', price: '$5.50' },
                { image: hazelnutLatte, name: 'Hazelnut Latte', price: '$5.50' },

            ]
        },
        {
            name: 'Mocha',
            image: mochaImage,
            description: 'A classic Italian coffee made with espresso, steamed milk, and topped with a frothy foam.',
            price: '$4.50',
            varieties: [
                { image: classicMocha, name: 'Classic Mocha', price: '$4.50' },
                { image: whiteChocolateMocha, name: 'White Chocolate Mocha', price: '$5.00' },
                { image: peppermintMocha, name: 'Pepper-Mint Mocha', price: '$5.50' },
                { image: icedMocha, name: 'Iced Mocha', price: '$5.50' },
                { image: mochaFrappuccino, name: 'Mocha Frappuccino', price: '$5.50' }
            ]
        }
    ];

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
                    {menuItems.map((item, index) => (
                        <div key={index} className='bg-yellow-100 m-4 w-full p-4 rounded-lg shadow-md flex flex-col items-center'>
                            <img src={item.image} alt={item.name} className='w-52 h-52 object-cover mb-4 rounded-t-lg' />
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
                <CoffeeModal isOpen={isModalOpen} onClose={closeModal} coffee={selectedCoffee} />
            </div>
        </div>
    );
};

export default Menu;