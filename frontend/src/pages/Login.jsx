import React from 'react';

const Login = ({ onClose }) => {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in...");
    };

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
            <div className='bg-white p-6 rounded-lg w-[22rem] relative'>
                <button onClick={onClose} className='absolute top-2 right-6 text-gray-600'>
                    x
                </button>
                <h2 className='text-2xl font-bold mb-8 text-yellow-800 text-center'>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='username' className='block text-sm font-semibold mb-1'>Username</label>
                        <input type='text' id='username' className='w-full px-3 py-2 border border-gray-300 rounded' autoComplete='off' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-sm font-semibold mb-1'>Password</label>
                        <input type='password' id='password' className='w-full px-3 py-2 border border-gray-300 rounded' autoComplete='off' />
                    </div>
                    <button type='submit' className='w-full bg-yellow-800 hover:bg-yellow-700 text-white py-2 rounded'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;