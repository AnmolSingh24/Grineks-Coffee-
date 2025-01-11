import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CoffeeProducts = ({ isOpen, onClose, coffee }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const selectedPrice = coffee?.prices?.find(price => price.size === selectedSize);
    const navigate = useNavigate();

    if (!isOpen || !coffee) return null;

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (selectedPrice) {
            const productData = { type: 'coffee', coffee, selectedPrice };
            navigate('/cart', { state: productData });
        } else {
            alert('Please select a size before buying');
        }
    };

    const handleBuyNow = (e) => {
        e.preventDefault();
        if (selectedPrice) {
            const productData = { type: 'coffee', coffee, selectedPrice };
            navigate('/ProductList/ProductSummary', { state: productData });
        } else {
            alert('Please select a size before buying');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
                <img src={coffee.image} alt={coffee.name} className="w-full h-64 object-cover mb-4 rounded-t-lg" />
                <h2 className="text-2xl font-semibold text-yellow-900">{coffee.name}</h2>
                <p className="mt-2 text-yellow-700">{coffee.description}</p>
                <div className='mt-4 text-center flex flex-row gap-4 justify-center p-4'>
                    {coffee?.prices?.map((price, index) => (
                        <button
                            key={index}
                            className={`text-yellow-800 font-semibold border border-gray-600 px-4 py-1.5 rounded-md ${selectedSize === price.size ? 'bg-yellow-400' : ''}`}
                            onClick={() => handleSizeClick(price.size)}
                        >
                            {price.size}
                        </button>
                    ))}
                </div>
                <div className="text-center">
                    {selectedPrice ? (
                        <p className="font-semibold text-yellow-800">Total: {selectedPrice.currency} {selectedPrice.amt}</p>
                    ) : (
                        <p className="font-semibold text-yellow-800">Please select a size</p>
                    )}
                </div>
                <div className="mt-4 text-right flex justify-between items-center gap-4">
                    <button className="bg-red-900 hover:bg-red-700 px-4 py-2 rounded-full text-white" onClick={onClose}>
                        Close
                    </button>
                    <div className='flex gap-2'>
                        <div>
                            <button className="bg-yellow-900 hover:bg-yellow-700 px-4 py-2 rounded-full text-white" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                        <div>
                            <button className="bg-yellow-900 hover:bg-yellow-700 px-4 py-2 rounded-full text-white" onClick={handleBuyNow}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeProducts;