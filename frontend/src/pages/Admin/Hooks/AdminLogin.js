import { useEffect, useState } from 'react'

const AdminLogin = () => {
    const [loading, setLoading] = useState(false);
    const [adminName, setAdminName] = useState("");

    const adminLogin = async () => {

        setLoading(true);
        try {
            const storedToken = localStorage.getItem("token");

            const res = await fetch("/api/auth/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": storedToken ? `Bearer ${storedToken}` : "",
                }
            });

            const data = await res.json();
            const fullname = data.fullname;
            setAdminName(fullname);
            if (data.err) throw new ERROR(data.error);

        } catch (err) {
            console.log("ERROR : ", err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
      adminLogin();
    }, [])
    
    return { loading, adminName };
}

export default AdminLogin;