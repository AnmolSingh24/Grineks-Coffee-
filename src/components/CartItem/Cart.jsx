import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EmptyCart from "../../assets/images/EmptyCart.png";
import Navbar from "../../pages/Navbar";
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useCart();
    const { type, coffee, selectedPrice, menu, selectedPriceAmt } = location.state || {};
    const [quantity, setQuantity] = useState(1);
    const [deliveryDay, setDeliveryDay] = useState('');
    const [amount, setAmount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [deliveryCharges, setDeliveryCharges] = useState(40);
    const [isProductSummary, setIsProductSummary] = useState(false);

    useEffect(() => {
        const getDeliveryDay = () => {
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const date = new Date();
            const deliveryDate = new Date(date.setDate(date.getDate() + 3));
            return days[deliveryDate.getDay()];
        };
        setDeliveryDay(getDeliveryDay());
    }, []);

    useEffect(() => {
        const calculateTotals = () => {
            const totalAmount = 0;
            cartItems.forEach(item => {
                const amt = item.type === 'coffee' ? item.selectedPrice?.amt : item.selectedPriceAmt?.price;
                setAmount(Math.floor(amt));
                if (amt > 800 && amt <= 1000) {
                    setDiscount(100);
                } else if (amt > 1000) {
                    setDiscount(200);
                } else {
                    setDiscount(0);
                }
            });
            if (totalAmount > 200 && totalAmount <= 300) {
                setDeliveryCharges(40);
            } else if (totalAmount > 300 && totalAmount <= 500) {
                setDeliveryCharges(50);
            } else if (totalAmount > 500) {
                setDeliveryCharges(0);
            } else {
                setDeliveryCharges(40);
            }
        };
        calculateTotals();
    }, [cartItems]);

    const calculateTotalAmount = () => {
        const totalAmount = cartItems.reduce((sum, item) => {
            const amt = item.type === 'coffee' ? item.selectedPrice?.amt : item.selectedPriceAmt?.price;
            return sum += parseInt(amt);
        }, 0);
        const totalAmt = (totalAmount * quantity) - discount + deliveryCharges;
        return totalAmt;
    };

    const handleIncreaseClick = () => setQuantity(quantity + 1);
    const handleDecreaseClick = () => quantity > 1 && setQuantity(quantity - 1);

    const handlePlaceOrderClick = (e) => {
        e.preventDefault();
        console.log('Anmol')
        const cartData = {type: 'coffee', coffee, selectedPrice};
        navigate('/ProductList/ProductSummary', { state: cartData });
        // navigate('/ProductList/ProductSummary', {
        //     state: { type, coffee, selectedPrice, menu, selectedPriceAmt, quantity, deliveryDay, discount, deliveryCharges }
        // });
    };

    // useEffect(() => {
    //     setIsProductSummary(location.pathname === '/ProductList/ProductSummary');
    // }, [location]);

    const handlePayNow = () => console.log('hello');

    const handleRemoveItem = (item) => removeFromCart(item);

    return (
        <div>
            <Navbar />
            {cartItems.length === 0 ? (
                <CartEmpty />
            ) : (
                <div className="mt-20">
                    <div className="w-full">
                        <h2 className='text-center font-bold text-4xl text-yellow-900 pb-16'>
                            {isProductSummary ? 'Product Summary' : 'Cart'}
                        </h2>
                        <div className="flex justify-center items-start gap-16">
                            <div className='w-full flex justify-center items-start gap-16'>
                                <div className="w-[52rem] h-fit bg-yellow-100 shadow-lg p-4 rounded-lg">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className='w-[50rem] h-40 bg-yellow-200 p-10 rounded-lg mb-4'>
                                            <div className="flex justify-center gap-16 -mt-4">
                                                <img src={item.type === 'coffee' ? item.coffee?.image : item.menu?.image} alt={item.type === 'coffee' ? item.coffee?.name : item.menu?.name} className="w-48 h-28 rounded-lg" />
                                                <div>
                                                    {item.type === 'coffee' && item.coffee?.name && (
                                                        <div>
                                                            <h3 className="text-yellow-800 font-normal text-lg pb-1">{item.coffee.name}</h3>
                                                            <p className="text-yellow-800 font-semibold pb-1">Size: <span className='font-normal'>{item.selectedPrice?.size}</span></p>
                                                        </div>
                                                    )}
                                                    {item.type === 'menu' && item.menu?.name && (
                                                        <div>
                                                            <h3 className="text-yellow-800 font-normal text-lg pb-1">{item.menu.name}</h3>
                                                            <p className="text-yellow-800 font-semibold pb-1">Size: <span className='font-normal'>{item.selectedPriceAmt?.size}</span></p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className='pb-2'>Delivery by {deliveryDay}, date | {deliveryCharges === 0 ? 'Free' : `₹ ${deliveryCharges}`}</p>
                                                    <p className='font-semibold text-yellow-800'>Grind Geeks</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center gap-4 -mt-8 ml-[4.8rem]">
                                                <button onClick={handleDecreaseClick}>–</button>
                                                <p className="border border-gray-800 shadow-2xl px-6 py-1">{quantity}</p>
                                                <button onClick={handleIncreaseClick}>+</button>
                                                <button onClick={() => handleRemoveItem(item)} className="font-semibold text-lg pl-16 text-yellow-800 hover:text-yellow-700">Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex justify-end mt-8">
                                        <button onClick={isProductSummary ? handlePayNow : handlePlaceOrderClick} className="w-36 text-center p-2 rounded-full font-semibold text-white bg-yellow-800 hover:bg-yellow-700 -mt-4">
                                            {isProductSummary ? 'Pay Now' : 'Place Order'}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-72 h-[19.5rem] bg-yellow-100 shadow-lg">
                                    <h2 className="border-b border-gray-400 py-4 text-center font-semibold text-xl text-yellow-800">Price Details</h2>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center pb-3 text-lg">
                                            <p>Item</p>
                                            <p>{quantity} item{quantity > 1 ? 's' : ''}</p>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 text-lg">
                                            <p>Price</p>
                                            <p>{cartItems[0]?.selectedPrice?.currency || cartItems[0]?.selectedPriceAmt?.currency} {calculateTotalAmount()}</p>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 text-lg">
                                            <p>Discount</p>
                                            <p>₹ {discount}</p>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-800 pb-4 text-lg">
                                            <p>Delivery Charges</p>
                                            <p>{deliveryCharges === 0 ? 'Free' : `₹ ${deliveryCharges}`}</p>
                                        </div>
                                        <div className="flex justify-between items-center pt-4 font-semibold text-lg">
                                            <h3>Total</h3>
                                            <h3>₹ {calculateTotalAmount()}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

export const CartEmpty = () => {
    return (
        <div className="my-36 flex justify-center items-center">
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg text-center">
                <img src={EmptyCart} alt="Empty Cart" className="w-96 mx-auto mb-4" />
                <h3 className="text-yellow-800 font-semibold text-2xl -mt-20 mb-2">Your cart is Empty</h3>
                <p className="text-gray-600 mb-4">It looks like you haven't added any items to your cart yet.</p>
                <Link to='Menu/MenuList'>
                    <button className="px-6 py-3 bg-yellow-800 text-white font-semibold text-md rounded hover:bg-yellow-700 transition duration-300">Shop Now</button>
                </Link>
            </div>
        </div>
    );
};
