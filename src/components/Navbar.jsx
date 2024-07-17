import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.jpg";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='pb-4 lg:mb-35 shadow-sm'>
            <div className='flex flex-wrap'>
                <div className='w-full p-2 flex items-center justify-between fixed bg-white'>
                    <div className='w-16 h-16 ml-16'>
                        <img src={Logo} alt="Grineks-Logo" />
                    </div>
                    <div className='flex items-center justify-center gap-10 text-sm font-bold text-yellow-800 pl-28'>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/menuList">MENU</Link>
                        <Link to="/productList">PRODUCT</Link>
                        <Link to="/facility">FACILITY</Link>
                        <Link to="/reviews">REVIEWS</Link>
                    </div>
                    <div className='flex items-center justify-center gap-6'>
                        <button className='p-3 hover:bg-yellow-800 rounded-full'>
                            <FaSearch className='w-4 h-4' />
                        </button>
                        <button className='p-3 hover:bg-yellow-800 rounded-full'>
                            <MdOutlineShoppingCart className='w-5 h-5' />
                        </button>
                        <button className='text-white font-normal bg-yellow-800 py-1.5 px-6 rounded-full'>
                            <p>Sign in</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;