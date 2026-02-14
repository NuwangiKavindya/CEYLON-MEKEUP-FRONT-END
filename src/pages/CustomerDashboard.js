// import StatCard from "./component/StateCard";

function CustomerDashboard() {
    return (
        <div className="min-h-screen bg-pink-50 p-6">

            {/* Header */}
            <h1 className="text-2xl font-bold text-pink-700 mb-6">
                Welcome back, GlowMuse 💖
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* <StatCard title="My Orders" value="12" />
                <StatCard title="Pending Orders" value="2" />
                <StatCard title="Wishlist Items" value="5" /> */}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow p-5">
                <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span>Lipstick Matte Red</span>
                        <span className="text-sm text-gray-500">Delivered</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Glow Foundation</span>
                        <span className="text-sm text-orange-500">Processing</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CustomerDashboard;
