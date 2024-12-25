import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.jpg";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { useCart } from '../context/CartContext';
import { FaHeart } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";

const Navbar = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const [dropDownModal, setDropDownModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const dropdownRef = useRef(null);

    const handleCartClick = () => navigate('/cart');

    const handleOpenDropDown = () => setDropDownModal(true);
    const handleCloseDropDown = () => setDropDownModal(false);

    const handleSignInModal = () => setSignInModal(true);
    const handleCloseModal = () => setSignInModal(false);

    return (
        <div className='pb-4 lg:mb-35 shadow-sm'>
            <div className='flex flex-wrap'>
                <div className='w-full p-2 flex justify-around items-center gap-20 fixed bg-white'>
                    <div className='w-16 h-16 ml-16'>
                        <Link to="/">
                            <img src={Logo} alt="Grineks-Logo" />
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-10 text-sm font-bold text-yellow-800 pl-28'>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/menuList">MENU</Link>
                        <Link to="/productList">PRODUCT</Link>
                        <Link to="/facility">FACILITY</Link>
                    </div>
                    <div className='flex items-center justify-center gap-6 mr-20'>
                        <button className='p-3 hover:bg-yellow-800 hover:text-white rounded-full'>
                            <FaSearch className='w-4 h-4' />
                        </button>
                        <div className='relative'>
                            <button onClick={handleCartClick} className='flex justify-center items-center gap-4 hover:bg-yellow-800 p-3 rounded-full hover:text-white'>
                                <MdOutlineShoppingCart className='w-5 h-5' />
                            </button>
                            {cartItems.length > 0 && (
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                        <div className='relative'>
                            <button onClick={handleOpenDropDown} className='flex justify-center items-center gap-4 hover:bg-yellow-800 p-3 rounded-full hover:text-white'>
                                <HiDotsVertical className='w-5 h-5' />
                            </button>
                            {dropDownModal && (
                                <div
                                    ref={dropdownRef}
                                    className='absolute top-12 right-0 bg-white shadow-lg rounded-lg w-[15rem] p-2'
                                >
                                    <button onClick={handleCloseDropDown} className='absolute top-2 right-2 text-yellow-800'>x</button>
                                    <div className='font-semibold p-1'>
                                        <div className='mt-6 mb-2'>
                                            <Link to="/wishList" className='block text-yellow-800 hover:bg-yellow-200 py-2 px-4 rounded-md'>
                                                <div className='flex justify-start items-center gap-4'>
                                                    <FaHeart />WishList
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="/trackOrder" className='block text-yellow-800 hover:bg-yellow-200 py-2 px-4 rounded-md'>
                                                <div className='flex justify-start items-center gap-4'>
                                                    <IoMdCheckbox className='w-5 h-5' />Track Order
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button onClick={handleSignInModal} className='text-white font-normal bg-yellow-800 py-1.5 px-6 rounded-full'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {signInModal && (
                <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg w-[22rem]'>
                        <div className='relative'>
                            <button onClick={handleCloseModal} className='absolute top-2 right-2 text-gray-600'>
                                x
                            </button>
                            <h2 className='text-2xl font-bold mb-8'>Sign Up</h2>
                        </div>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor='fullname' className='block text-sm font-semibold mb-1'>Fullname</label>
                                <input type='fullname' id='fullname' className='w-full px-3 py-2 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='username' className='block text-sm font-semibold mb-1'>Username</label>
                                <input type='username' id='username' className='w-full px-3 py-2 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-sm font-semibold mb-1'>Email</label>
                                <input type='email' id='email' className='w-full px-3 py-2 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='password' className='block text-sm font-semibold mb-1'>Password</label>
                                <input type='password' id='password' className='w-full px-3 py-2 border border-gray-300 rounded' />
                            </div>
                            <button type='submit' className='w-full bg-yellow-800 hover:bg-yellow-700 text-white py-2 rounded'>
                                Sign Up
                            </button>

                            <p className='pt-3 text-gray-700'>Already a customer?<Link to='/' className='text-yellow-900 hover:text-yellow-700 font-semibold'> Login</Link></p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;