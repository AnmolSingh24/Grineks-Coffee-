import { Link } from "react-router-dom";

const MenuVarieties = ({ isOpen, onClose, coffee }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[55rem] h-[40rem] overflow-scroll overflow-x-hidden">
                <h2 className="text-2xl font-bold text-yellow-900 text-center mb-10">{coffee.name} Varieties</h2>
                <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {coffee?.varieties?.map((variety, index) => (
                        <div key={index} className="bg-yellow-100 m-4 w-[16rem] p-4 rounded-lg shadow-md flex flex-col items-center">
                            <img src={variety.image} alt={variety.name} className="w-full h-36 object-cover mb-2 rounded-t-lg" />
                            <span className="text-yellow-700 font-semibold pb-4">{variety.name}</span>
                            <Link to='MenuModal'>
                                <button className="bg-yellow-900 hover:bg-yellow-700 px-4 py-2 rounded-full text-white">View</button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button onClick={onClose} className="bg-red-900 hover:bg-red-700 px-6 py-2 rounded-full text-white">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuVarieties;