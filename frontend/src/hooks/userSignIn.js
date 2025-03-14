import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const UserSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullname, username, email, password, confirmpassword }) => {
        if (!handleInputs({ fullname, username, email, password, confirmpassword })) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullname, username, email, password, confirmpassword }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            localStorage.setItem("signup-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (err) {
            console.error("Signup Error:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

const handleInputs = ({ fullname, username, email, password, confirmpassword }) => {
    if (!fullname || !username || !email || !password || !confirmpassword) {
        console.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmpassword) {
        console.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        console.error("Password must be at least 6 characters");
        return false;
    }

    return true;
};

export default UserSignUp;