import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import Logo from "../assets/images/Logo.jpg";
import { FaSearch, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
//import { useCart } from "../context/CartContext"
import SignUp from '../pages/Profile/SignUp';

const Navbar = () => {
    //const { cartItems } = useCart();
    const navigate = useNavigate();
    const [dropDownModal, setDropDownModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const dropdownRef = useRef(null);

    const handleCartClick = () => navigate('/cart');

    const handleOpenDropDown = () => setDropDownModal(true);
    const handleCloseDropDown = () => setDropDownModal(false);

    const handleSignInModal = () => setSignInModal(true);
    const handleCloseSignInModal = () => setSignInModal(false);

    return (
        <div className='pb-4 lg:mb-35 shadow-sm'>
            <div className='flex flex-wrap'>
                <div className='w-full p-2 flex justify-around items-center gap-20 fixed bg-white z-50'>

                    <div className='w-16 h-16 ml-16'>
                        <Link to="/">
                            {/* <img src={Logo} alt="Grineks-Logo" /> */}
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
                            {/* {cartItems.length > 0 && (
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                                    {cartItems.length}
                                </div>
                            )} */}
                        </div>

                        <div className='relative'>
                            <button onClick={handleOpenDropDown} className='flex justify-center items-center gap-4 hover:bg-yellow-800 p-3 rounded-full hover:text-white'>
                                <HiDotsVertical className='w-5 h-5' />
                            </button>
                            {dropDownModal && (
                                <div ref={dropdownRef} className='absolute top-12 right-0 bg-white shadow-lg rounded-lg w-[15rem] p-2'>
                                    <button onClick={handleCloseDropDown} className='absolute top-2 right-2 text-yellow-800'>x</button>
                                    <div className='font-semibold p-1'>
                                        <div className='mt-6 mb-2'>
                                            <Link to="/wishList" className='block text-yellow-800 hover:bg-yellow-200 py-2 px-4 rounded-md'>
                                                <div className='flex justify-start items-center gap-4'>
                                                    <FaHeart /> WishList
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button onClick={handleSignInModal} className='text-white font-normal bg-yellow-800 py-1.5 px-6 rounded-full'>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {signInModal && <SignUp onClose={handleCloseSignInModal} />}
        </div>
    );
};

export default Navbar;