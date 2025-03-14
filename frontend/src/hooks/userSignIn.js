import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const userSignIn = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signin = async ({ fullname, username, email, password, confirmpassword }) => {
        const success = handleInput({ fullname, username, email, password, confirmpassword });
        if (!success) return;

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
            console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("signup-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (err) {
            console.log("Error:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signin };
};

export default userSignIn;

function handleInput({ fullname, username, email, password, confirmpassword }) {
    if (!fullname || !username || !email || !password || !confirmpassword) {
        alert("Please fill in all fields");
        return false;
    }

    if (password !== confirmpassword) {
        alert("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    return true;
}