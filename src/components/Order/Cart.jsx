import React from 'react';
import { Link } from "react-router-dom";
import arabicaImage from "../../assets/arabica.jpg";

const Cart = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center font-bold text-4xl text-yellow-900 pb-16'>Cart</h1>
            <div className='flex justify-center items-center gap-16'>
                <div className="w-[60rem] h-80 bg-yellow-100 shadow-lg p-10">
                    <div className="flex justify-center gap-16 ">
                        <img src={arabicaImage} alt="Product Image" className="w-64 rounded-lg" />
                        <div>
                            <h3 className="text-yellow-800 font-normal text-lg pb-1">Product name</h3>
                            <p className="text-gray-600 pb-1">Size: M</p>
                            <p>Grind Geeks</p>
                        </div>
                        <div>
                            <p>Delivery by day, date | free or charges</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 pl-28">
                        <div>
                            <button>–</button>
                        </div>
                        <div>
                            <p className="border border-gray-800 shadow-2xl px-6 py-1">1</p>
                        </div>
                        <div>
                            <button>+</button>
                        </div>
                        <div>
                            <button className="font-semibold text-lg pl-10 hover:text-yellow-800">Remove</button>
                        </div>
                    </div>
                    <div className="flex justify-end mt-8">
                        <Link to='/cart/placeOrder'>
                            <button className="w-36 text-center p-2 rounded-full font-semibold text-white bg-yellow-800 -mt-4">Place Order</button>
                        </Link>
                    </div>
                </div>
                <div className="w-72 h-[19.5rem] bg-yellow-100 shadow-lg">
                    <h2 className="border-b border-gray-400 py-4 px-8 font-semibold text-xl text-yellow-800">Price Details</h2>
                    <div className="p-6">
                        <div className="flex justify-between items-center pb-6 text-lg">
                            <p>Price (1 Item)</p>
                            <p>price</p>
                        </div>
                        <div className="flex justify-between items-center pb-6 text-lg">
                            <p>Discount</p>
                            <p>-800</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-800 pb-4 text-lg">
                            <p>Delivery Charges</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between items-center pt-6 font-semibold text-lg">
                            <h3>Total Amount</h3>
                            <h3>₹ price</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;