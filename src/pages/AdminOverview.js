import React, { useState, useEffect } from "react";
import StatCard from "../component/StateCard";
import { axiosInstance } from "../api/auth";
import { Package, Tags, ShoppingCart, DollarSign, Plus, List } from "lucide-react";

const AdminOverview = () => {
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalCategories: 0,
        totalOrders: 0,
        totalRevenue: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdminStats = async () => {
            try {
                const [productsRes, categoriesRes, ordersRes] = await Promise.all([
                    axiosInstance.get('products'),
                    axiosInstance.get('categories'),
                    axiosInstance.get('orders').catch(() => ({ data: [] })) // Fallback if orders table doesn't exist yet
                ]);

                setStats({
                    totalProducts: productsRes.data.length || 0,
                    totalCategories: categoriesRes.data.length || 0,
                    totalOrders: ordersRes.data.length || 0,
                    totalRevenue: Array.isArray(ordersRes.data)
                        ? ordersRes.data.reduce((acc, order) => acc + (order.totalAmount || 0), 0)
                        : 0
                });
            } catch (error) {
                console.error("Error fetching admin stats:", error);
                setError("Failed to load some dashboard statistics.");
            } finally {
                setLoading(false);
            }
        };
        fetchAdminStats();
    }, []);

    if (loading) return <div className="p-10 text-pink-600 font-medium">Crunching the numbers... 📊</div>;

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-700 transition shadow-sm" onClick={() => window.location.href = '/dashboard/addMakeupProduct'}>
                        <Plus size={18} /> Add Product
                    </button>
                </div>
            </div>

            {error && <div className="bg-orange-50 text-orange-700 p-4 rounded-lg mb-6 border border-orange-100">{error}</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard title="Total Products" value={stats.totalProducts} icon={<Package className="text-blue-500" />} />
                <StatCard title="Total Categories" value={stats.totalCategories} icon={<Tags className="text-purple-500" />} />
                <StatCard title="Total Orders" value={stats.totalOrders} icon={<ShoppingCart className="text-orange-500" />} />
                <StatCard title="Total Revenue" value={`Rs. ${stats.totalRevenue.toLocaleString()}`} icon={<DollarSign className="text-green-500" />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ActionLink
                            title="Manage Products"
                            desc="Update existing listings"
                            href="/dashboard/manageProduct"
                            icon={<List className="text-pink-500" />}
                        />
                        <ActionLink
                            title="Manage Categories"
                            desc="Organize your store"
                            href="/dashboard/manageCategory"
                            icon={<Tags className="text-pink-500" />}
                        />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Store Health</h2>
                    <div className="space-y-4">
                        <HealthBar label="Inventory Level" percentage={85} color="bg-blue-500" />
                        <HealthBar label="Order Completion" percentage={92} color="bg-green-500" />
                        <HealthBar label="Customer Satisfaction" percentage={98} color="bg-pink-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ActionLink = ({ title, desc, href, icon }) => (
    <a href={href} className="p-4 border border-gray-100 rounded-xl hover:border-pink-200 hover:bg-pink-50/30 transition-all flex gap-4 group">
        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white transition">
            {icon}
        </div>
        <div>
            <h3 className="font-semibold text-gray-800 group-hover:text-pink-700 transition">{title}</h3>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
    </a>
);

const HealthBar = ({ label, percentage, color }) => (
    <div>
        <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 font-medium">{label}</span>
            <span className="text-gray-900 font-bold">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
            <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

export default AdminOverview;
