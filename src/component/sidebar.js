import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    User,
    ShoppingBag,
    Tags,
    PlusCircle,
    Settings,
    LogOut,
    ShoppingCart,
    Heart
} from "lucide-react";

const Sidebar = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const role = userData.role || "user"; // Default to user if not specified

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const adminLinks = [
        { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
        { name: "Manage Products", path: "/dashboard/manageProduct", icon: ShoppingBag },
        { name: "Manage Category", path: "/dashboard/manageCategory", icon: Tags },
        { name: "Add Product", path: "/dashboard/addMakeupProduct", icon: PlusCircle },
        { name: "Add Category", path: "/dashboard/addCategory", icon: PlusCircle },
    ];

    const userLinks = [
        { name: "My Dashboard", path: "/dashboard", icon: LayoutDashboard },
        { name: "My Profile", path: "/dashboard/profile", icon: User },
        { name: "My Cart", path: "/cartPage", icon: ShoppingCart },
        { name: "My Wishlist", path: "/wishlist", icon: Heart },
    ];

    const links = role === "admin" ? adminLinks : userLinks;

    return (
        <div className="w-64 bg-white border-r h-screen shadow-sm flex flex-col">
            <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-pink-700">GlowMuse</h2>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{role} Panel</p>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? "bg-pink-50 text-pink-600"
                                : "text-gray-600 hover:bg-gray-50 hover:text-pink-600"
                            }`
                        }
                    >
                        <link.icon size={18} />
                        <span>{link.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
