import { useState } from "react";
import CheckHomePage from "./components/CheckHomePage"
import AdminLogin from "./hooks/AdminLogin";

export default function AdminDashboard() {
    const [activeComponent] = useState("home");
    const { adminName } = AdminLogin();

    return (
        <div>
            <nav className="fixed top-0 left-0 h-16 w-full bg-white shadow-md dark:bg-yellow-800">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <p className="text-xl pt-1 font-bold dark:text-white">Welcome, {adminName}</p>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto p-4 pt-16">
                {activeComponent === "home" && <CheckHomePage />}
            </div>
        </div>
    );
}