import Navbar from './pages/Navbar'

const WishList = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-20 min-h-screen '>
                <div className='w-full'>
                    <h2 className='text-center font-bold text-3xl text-yellow-900 pb-16'>Your Wishlist</h2>
                </div>
            </div>
        </div>
    )
}

export default WishList