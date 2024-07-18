import espressoImage from '../assets/Menu1.avif';
import cappuccinoImage from '../assets/Menu2.avif';
import latteImage from '../assets/Menu3.jpg';
import americanoImage from '../assets/Menu4.jpg';
import mochaImage from '../assets/Menu5.jpg';
import icedImage from '../assets/Menu6.jpg';

const MenuList = () => {
    const menuItems = [
        { name: 'Espresso', image: espressoImage, price: '$3.00' },
        { name: 'Cappuccino', image: cappuccinoImage, price: '$4.50' },
        { name: 'Latte', image: latteImage, price: '$4.00' },
        { name: 'Americano', image: americanoImage, price: '$3.50' },
        { name: 'Mocha', image: mochaImage, price: '$4.75' },
        { name: 'Iced Coffees', image: icedImage, price: '$4.75' },
    ];

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='my-12'>
                <div>
                    <h1 className='text-center font-bold text-4xl text-yellow-900'>Our Menu</h1>
                </div>
                <div className='mt-10 w-[64rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {menuItems.map((item, index) => (
                        <div key={index} className='bg-yellow-100 m-2 w-full p-4 rounded-lg shadow-md flex flex-col items-center'>
                            <img src={item.image} alt={item.name} className='w-52 h-52 object-cover mb-4 rounded-t-lg' />
                            <h2 className='text-2xl text-center font-semibold text-yellow-900'>{item.name}</h2>
                            <p className='mt-2 text-yellow-700 font-bold text-center pb-2'>{item.price}</p>
                            <div className='text-center'>
                                <button className='bg-yellow-900 hover:bg-yellow-700 px-6 py-2 rounded-full text-white'>View</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuList