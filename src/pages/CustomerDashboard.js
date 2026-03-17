import React, { useState, useEffect } from "react";
import StatCard from "../component/StateCard";
import { axiosInstance } from "../api/auth";
import { useWishlist } from "../contexts/WishlistContext";
import { ShoppingBag, Heart, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CustomerDashboard() {
    const { wishlist } = useWishlist();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [stats, setStats] = useState({
        totalOrders: 0,
        pendingOrders: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userData = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        const getDashboardData = async () => {
            try {
                const response = await axiosInstance.get('orders/recent');
                const ordersData = response.data || [];
                setOrders(ordersData);
                setStats({
                    totalOrders: ordersData.length,
                    pendingOrders: ordersData.filter(o => o.status === 'Pending' || o.status === 'Processing').length
                });
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                // Don't set error if it's just a 404 (no orders yet)
                if (err.response?.status !== 404) {
                    setError("Unable to load your latest orders.");
                }
            } finally {
                setLoading(false);
            }
        };
        getDashboardData();
    }, []);

    if (loading) return <div className="p-10 text-pink-600 font-medium">Loading your beauty profile... ✨</div>;

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Hi, {userData.name || 'GlowMuse'} 💖
                </h1>
                <p className="text-gray-500">Ready for your next glow up? Here's your account overview.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <StatCard
                    title="My Orders"
                    value={stats.totalOrders}
                    icon={<ShoppingBag className="text-blue-500" />}
                />
                <StatCard
                    title="Wishlist Items"
                    value={wishlist.length}
                    icon={<Heart className="text-pink-500" />}
                />
                <StatCard
                    title="Pending"
                    value={stats.pendingOrders}
                    icon={<Clock className="text-orange-500" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                        <button className="text-pink-600 text-sm font-semibold hover:underline flex items-center gap-1">
                            View All <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition" key={order._id || order.id}>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                                        <ShoppingBag size={20} className="text-gray-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Order #{order._id?.slice(-6).toUpperCase()}</div>
                                        <div className="text-xs text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-gray-900">Rs. {order.totalAmount?.toLocaleString()}</div>
                                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                            order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                                                'bg-pink-100 text-pink-700'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {orders.length === 0 && (
                            <div className="text-center py-10">
                                <p className="text-gray-400 italic mb-4">You haven't placed any orders yet.</p>
                                <button
                                    className="text-white bg-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition shadow-md"
                                    onClick={() => navigate('/product')}
                                >
                                    Start Shopping
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Account Settings / Quick Links */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h2>
                        <div className="space-y-2">
                            <QuickLink label="My Profile" href="/dashboard/profile" />
                            <QuickLink label="My Wishlist" href="/wishlist" />
                            <QuickLink label="My Cart" href="/cartPage" />
                            <QuickLink label="Support" href="/about" />
                        </div>
                    </div>

                    <div className="bg-pink-600 rounded-2xl p-6 text-white shadow-lg shadow-pink-200 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-2">Member Perks 💎</h3>
                            <p className="text-pink-100 text-sm mb-4">Enjoy 10% off on your next purchase with code GLOW10</p>
                            <button className="bg-white text-pink-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-pink-50 transition">
                                Claim Reward
                            </button>
                        </div>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-500 rounded-full opacity-50 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const QuickLink = ({ label, href }) => (
    <a href={href} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition group">
        <span>{label}</span>
        <ChevronRight size={16} className="text-gray-400 group-hover:text-pink-600 transition" />
    </a>
)

export default CustomerDashboard;
