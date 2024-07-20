import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import { useEffect, useState } from 'react';

const ProductOrderDetails = () => {
    const location = useLocation();
    const { coffee, selectedPrice } = location.state || {};
    const [deliveryDay, setDeliveryDay] = useState('');
    const [discount, setDiscount] = useState(0);
    const [deliveryCharges, setDeliveryCharges] = useState(40);
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(1);

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
        if (selectedPrice) {
            const amt = selectedPrice.amt;
            setAmount(Math.floor(amt));

            if (amt > 200 && amt <= 300) {
                setDeliveryCharges(40);
            } else if (amt > 300 && amt <= 500) {
                setDeliveryCharges(50);
            } else if (amt > 500) {
                setDeliveryCharges(0);
            } else {
                setDeliveryCharges(40);
            }
        }
    }, [selectedPrice]);

    useEffect(() => {
        if (selectedPrice && selectedPrice.amt) {
            const amt = selectedPrice.amt;
            if (amt > 800 && amt <= 1000) {
                setDiscount(100);
            } else if (amt > 1000) {
                setDiscount(200);
            } else {
                setDiscount(0);
            }
        }
    }, [selectedPrice]);

    const totalAmt = (amount * quantity) - discount + deliveryCharges;

    if (!coffee || !selectedPrice) return <div>Loading...</div>;

    const handleIncreaseClick = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mt-24">
                <div className="w-full">
                    <h2 className='text-center font-bold text-4xl text-yellow-900 pb-16'>Product Details</h2>
                    <div className="">
                        <div className="flex justify-center items-start gap-16">
                            <div className='w-full flex justify-center items-start gap-16'>
                                <div className="w-[50rem] h-fit bg-yellow-100 shadow-lg p-4 rounded-lg">
                                    <div className='w-[48rem] h-40 bg-yellow-200 p-10 rounded-lg'>
                                        <div className="flex justify-center gap-16 -mt-4">
                                            <img src={coffee.image} alt={coffee.name} className="w-48 h-28 rounded-lg" />
                                            <div>
                                                {coffee.name && (
                                                    <div>
                                                        <h3 className="text-yellow-800 font-normal text-lg pb-1">{coffee.name}</h3>
                                                        <p className="text-yellow-800 font-semibold pb-1">Size: <span className='font-normal'>{selectedPrice.size}</span></p>
                                                    </div>)}
                                            </div>
                                            <div>
                                                <p className='pb-2'>Delivery by {deliveryDay}, date | {deliveryCharges === 0 ? 'Free' : `₹ ${deliveryCharges}`}</p>
                                                <p className='font-semibold text-yellow-800'>Grind Geeks</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center gap-4 -mt-8 ml-[7.8rem]">
                                            <span>
                                                <button onClick={handleDecreaseClick}>–</button>
                                            </span>
                                            <span>
                                                <p className="border border-gray-800 shadow-2xl px-6 py-1">{quantity}</p>
                                            </span>
                                            <span>
                                                <button onClick={handleIncreaseClick}>+</button>
                                            </span>
                                            <div>
                                                <button className="font-semibold text-lg pl-16 text-yellow-800 hover:text-yellow-700">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-8">
                                        <Link to='/cart/placeOrder'>
                                            <button className="w-36 text-center p-2 rounded-full font-semibold text-white bg-yellow-800 hover:bg-yellow-700 -mt-4">
                                                Place Order
                                            </button>
                                        </Link>
                                    </div>
                                    {location.state.showPayButton && (
                                        <div className="flex justify-end mt-10">
                                            <button className="w-36 text-center p-2 rounded-full font-semibold text-white bg-yellow-800 hover:bg-yellow-700 -mt-4">
                                                Pay
                                            </button>
                                        </div>)}
                                </div>
                                <div className="w-72 h-[17.5rem] bg-yellow-100 shadow-lg">
                                    <h2 className="border-b border-gray-400 py-4 text-center font-semibold text-xl text-yellow-800">Price Details</h2>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center pb-3 text-lg">
                                            <p>Price ({quantity} item{quantity > 1 ? 's' : ''})</p>
                                            <p>{selectedPrice.currency} {amount * quantity}</p>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 text-lg">
                                            <p>Discount</p>
                                            <p>{`₹ ${discount}`}</p>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-800 pb-4 text-lg">
                                            <p>Delivery Charges</p>
                                            <p>{deliveryCharges === 0 ? 'Free' : `₹ ${deliveryCharges}`}</p>
                                        </div>
                                        <div className="flex justify-between items-center pt-4 font-semibold text-lg">
                                            <h3>Total</h3>
                                            <h3>₹ {totalAmt}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOrderDetails;