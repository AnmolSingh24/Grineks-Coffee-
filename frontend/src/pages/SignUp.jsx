import React, { useState } from "react";
import UserSignUp from "../hooks/userSignIn";
import userLogin from "../hooks/userLogin";

const SignUp = ({ onClose }) => {
    const { loading, signup } = UserSignUp();
    const { loginLoading, login } = userLogin();
    const [isLogin, setIsLogin] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const handleCloseLoginModal = () => setLoginModal(false);

    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const validateInputs = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?!.*\s).{6,20}$/;

        if (!isLogin) {
            if (!inputs.fullname.trim()) return console.error("Fullname is required"), false;
            if (!inputs.username.trim()) return console.error("Username is required"), false;
        }
        if (!inputs.email.trim()) return console.error("Email is required"), false;
        if (!emailRegex.test(inputs.email)) return console.error("Invalid email format"), false;
        if (!inputs.password.trim()) return console.error("Password is required"), false;
        if (!passwordRegex.test(inputs.password)) return console.error("Invalid password format"), false;
        if (!isLogin && inputs.password !== inputs.confirmpassword) return console.error("Passwords do not match"), false;

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateInputs()) {
            try {
                if (isLogin) {
                    // Call login function
                    await login({ username: inputs.username, password: inputs.password });
                    console.log("User logged in:", inputs.username, inputs.password);
                } else {
                    // Call signup function
                    await signup(inputs);
                    console.log("User signed up:", inputs);
                }
            } catch (err) {
                console.error(err.message);
            }
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 mt-20 rounded-lg w-[22rem] relative">
                <button onClick={onClose} className="absolute top-2 right-6 text-yellow-800 text-md font-bold">x</button>
                <h2 className="text-2xl font-bold mb-6 text-yellow-800 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Full Name</label>
                                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" autoComplete="off"
                                    value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Username</label>
                                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" autoComplete="off"
                                    value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Email</label>
                                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" autoComplete="off"
                                    value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Password</label>
                                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded" autoComplete="off"
                                    value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Confirm Password</label>
                                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded" autoComplete="off"
                                    value={inputs.confirmpassword} onChange={(e) => setInputs({ ...inputs, confirmpassword: e.target.value })} />
                            </div>
                        </>
                    )}

                    {isLogin && (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Username</label>
                                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" autoComplete="off"
                                    value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Password</label>
                                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded" autoComplete="off"
                                    value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                            </div>
                        </>
                    )}

                    <button type="submit" className="w-full bg-yellow-800 hover:bg-yellow-700 text-white py-2 rounded">
                        {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
                    </button>

                    <p className="pt-3 text-gray-700 text-center">
                        {isLogin ? "Don't have an account?" : "Already a customer?"}
                        <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-yellow-900 hover:text-yellow-700 font-semibold ml-1">
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;