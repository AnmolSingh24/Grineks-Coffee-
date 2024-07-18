import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='bg-yellow-100 w-full h-72 flex justify-evenly'>
                <div>
                    <h2 className='text-yellow-800 font-semibold text-3xl px-16 py-6'>Grind Geeks</h2>
                    <p className='text-center text-yellow-800'>Thanks for visiting Grind Geeks</p>
                </div>
                <div>
                    <h2 className='text-yellow-800 font-semibold text-3xl px-16 py-6'>Quick Links</h2>
                    <div className='flex flex-col text-center p-2 font-semibold text-yellow-800'>
                        <Link to="/about" className='hover:text-yellow-600 pb-2'>ABOUT</Link>
                        <Link to="/menuList" className='hover:text-yellow-600 pb-2'>MENU</Link>
                        <Link to="/productList" className='hover:text-yellow-600 pb-2'>PRODUCT</Link>
                        <Link to="/facility" className='hover:text-yellow-600 pb-2'>FACILITY</Link>
                    </div>
                </div>
                <div>
                    <p className='text-center text-yellow-800 pt-8'>© 2024 Grind Geeks All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer