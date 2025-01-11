import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext';

const MenuModal = ({ isOpen, onClose, menu }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const selectedPriceAmt = menu?.sizes?.find(price => price.size === selectedSize);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!isOpen || !menu) return null;

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (selectedPriceAmt) {
      const menuData = { type: 'menu', menu, selectedPriceAmt };
      addToCart(menuData);
      onClose();
    } else {
      alert('Please select a size before buying');
    }
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    if (selectedPriceAmt) {
      const menuData = { type: 'menu', menu, selectedPriceAmt };
      addToCart(menuData);
      navigate('/ProductList/ProductSummary', { state: menuData });
    } else {
      alert('Please select a size before buying');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-4 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-96 h-[30rem]">
        <img src={menu.image} alt={menu.name} className="w-full h-64 object-cover mb-4 rounded-t-lg" />
        <h2 className="text-2xl font-semibold text-yellow-900">{menu.name}</h2>
        <div className='text-center flex flex-row gap-4 justify-center p-2'>
          {menu?.sizes?.map((price, index) => (
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
          {selectedPriceAmt ? (
            <p className="font-semibold text-yellow-800">Total: {selectedPriceAmt.currency} {selectedPriceAmt.price}</p>
          ) : (
            <p className="font-semibold text-yellow-800">Please select a size</p>
          )}
        </div>
        <div className="mt-4 text-right flex justify-between items-center gap-4">
          <button onClick={onClose} className="bg-red-900 hover:bg-red-700 px-4 py-2 rounded-full text-white" >
            Close
          </button>
          <div className='flex gap-2'>
            <button onClick={handleAddToCart} className="bg-yellow-900 hover:bg-yellow-700 px-4 py-2 rounded-full text-white" >
              Add to Cart
            </button>
            <button onClick={handleBuyNow} className="bg-yellow-900 hover:bg-yellow-700 px-4 py-2 rounded-full text-white" >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;