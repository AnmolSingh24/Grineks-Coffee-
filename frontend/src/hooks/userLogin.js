import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const UserLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {
        //if (!handleInput({ username, password })) return;

        setLoading(true);
        try {
            // const storedToken = document.cookie
            // .split(";")
            // .find((cookie) => cookie.trim().startsWith("authToken="))
            // ?.split("=")[1];

            //const storedToken = localStorage.getItem("token");     //22/03/2025

            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //Authorization: storedToken ? `Bearer ${storedToken}` : "",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            console.log("hello Login", data)
            localStorage.setItem("token", data.token);
            if (!res.ok) {
                throw new Error(data.error || "Login failed");
            }
            //localStorage.setItem("token", JSON.stringify(data));
            setAuthUser(data);
        } catch (err) {
            console.error("Login Error:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default UserLogin;

const handleInput = ({ username, password }) => {
    console.log(username, password);
    if (!username || !password) {
        alert("Please fill in all fields");
        return false;
    }
    return true;
};