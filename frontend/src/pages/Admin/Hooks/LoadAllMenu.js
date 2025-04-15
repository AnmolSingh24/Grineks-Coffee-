import { useEffect, useState } from "react";

const GetMenu = () => {
    const [loading, setLoading] = useState(false);
    const [adminMenu, setAdminMenu] = useState();

    const loadAdminMenu = async () => {

        setLoading(true);
        try {
            const storedToken = localStorage.getItem("token");
            const res = await fetch('/api/menu/all-menu', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": storedToken ? `Bearer ${storedToken}` : "",
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log("All Data : ", data);

            if (!data || data.err) throw new Error(data.error || `HTTP error! status: ${res.status}` || "Failed to update data");
            setAdminMenu(data);
        } catch (err) {
            console.log("ERROR : ", err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadAdminMenu();
    }, []);

    return { loading, adminMenu };
}

export default GetMenu;

export async function CreateMenu(createdItem) {
    try {
        const storedToken = localStorage.getItem("token");
        const res = await fetch('/api/menu/admin-menu', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": storedToken ? `Bearer ${storedToken}` : "",
            },
            body: JSON.stringify(createdItem),
        });

        const data = await res.json();
        console.log("Response Data: ", data);

        if (data.err) throw new Error(data.error);
        return data;
    } catch (err) {
        console.log("ERROR: ", err.message);
    }
}

export async function UpdateMenu(updatedItem) {
    try {
        const storedToken = localStorage.getItem("token");
        const res = await fetch(`/api/menu/${updatedItem?._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": storedToken ? `Bearer ${storedToken}` : "",
            },
            body: JSON.stringify(updatedItem),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (data.err) throw new Error(data.error);
        return data;
    } catch (err) {
        console.log("ERROR: ", err.message);
    }
}

export async function DeleteMenu(deleteItem) {
    try {
        const storedToken = localStorage.getItem("token");
        const res = await fetch(`/api/menu/${deleteItem?._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": storedToken ? `Bearer ${storedToken}` : "",
            }
        });

        const data = await res.json();
        if (data.err) throw new Error(data.error);
        console.log("Deleted Menu: ", data);
        return data;
    } catch (err) {
        console.log("ERROR: ", err.message);
    }
}