const CoffeeProducts = ({ isOpen, onClose, coffee }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
                <img src={coffee.image} alt={coffee.name} className="w-full h-64 object-cover mb-4 rounded-t-lg" />
                <h2 className="text-2xl font-semibold text-yellow-900">{coffee.name}</h2>
                <p className="mt-2 text-yellow-700">{coffee.description}</p>
                <p className="mt-2 text-yellow-700 font-bold">{coffee.price}</p>
                <div className="mt-4 text-right flex justify-end items-center gap-4">
                    <button className="bg-red-900 hover:bg-red-700 px-4 py-2 rounded-full text-white" onClick={onClose}>
                        Close
                    </button>
                    <button className="bg-yellow-900 hover:bg-yellow-700 px-4 py-2 rounded-full text-white" onClick={onClose}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeProducts;