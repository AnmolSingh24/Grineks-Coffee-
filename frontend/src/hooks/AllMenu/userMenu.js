import React, { useEffect, useState } from 'react'

const userMenu = () => {
    const [loading, setLoading] = useState(false);
    const [UserMenu, setUserMenu] = useState();

    const userMenu = async () => {

        setLoading(true);
        try {
            const storedToken = localStorage.getItem("token");

            const res = await fetch("/api/menu/all-menu", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": storedToken ? `Bearer ${storedToken}` : "",
                }
            });

            const data = await res.json();
            setUserMenu(data);
            if (data.err) throw new ERROR(data.error);

        } catch (err) {
            console.log("ERROR : ", err.message);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        userMenu();
    }, [])

    return { loading, UserMenu };
}

export default userMenu