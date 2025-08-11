// src/pages/Dashboard.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 300 },
  { month: 'Feb', sales: 400 },
  { month: 'Mar', sales: 350 },
  { month: 'Apr', sales: 500 },
  { month: 'May', sales: 470 },
  { month: 'Jun', sales: 520 },
  { month: 'Jul', sales: 650 },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-pink-100 p-6">
        <h2 className="text-xl font-bold mb-6 text-pink-700">GlowMuse</h2>
        <nav className="flex flex-col space-y-4 text-pink-800">
          <a href="#" className="hover:text-pink-600">Dashboard</a>
          <a href="#" className="hover:text-pink-600">Orders</a>
          <a href="#" className="hover:text-pink-600">Products</a>
          <a href="#" className="hover:text-pink-600">Customers</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card title="Total Sales" value="$12,340" />
          <Card title="Orders" value="1,280" />
          <Card title="Products" value="150" />
          <Card title="Customers" value="3,200" />
        </div>

        {/* Sales Chart and Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-pink-50 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#d63384" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-pink-50 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Top Products</h3>
            <ul className="space-y-3 text-pink-900">
              <li className="flex justify-between"><span>💄 Lipstick</span><span>320</span></li>
              <li className="flex justify-between"><span>🧴 Foundation</span><span>280</span></li>
              <li className="flex justify-between"><span>🎨 Eyeshadow</span><span>250</span></li>
              <li className="flex justify-between"><span>🖌️ Mascara</span><span>200</span></li>
            </ul>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-8 bg-pink-50 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-pink-600">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="text-pink-900">
              <tr><td>#12346</td><td>Emma Brown</td><td>07/16/2023</td><td><StatusBadge color="orange">Pending</StatusBadge></td><td>$12.00</td></tr>
              <tr><td>#12345</td><td>Olivia Davis</td><td>07/16/2023</td><td><StatusBadge color="green">Completed</StatusBadge></td><td>$80.00</td></tr>
              <tr><td>#12344</td><td>Sophia Wilson</td><td>07/16/2023</td><td><StatusBadge color="blue">Shipped</StatusBadge></td><td>$92.00</td></tr>
              <tr><td>#12343</td><td>Mia Johnson</td><td>07/12/2023</td><td><StatusBadge color="blue">Shipped</StatusBadge></td><td>$107.00</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-pink-50 p-4 rounded-xl shadow flex flex-col justify-between">
    <h4 className="text-sm text-pink-600">{title}</h4>
    <p className="text-xl font-bold text-pink-800">{value}</p>
  </div>
);

const StatusBadge = ({ children, color }) => {
  const colors = {
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700',
  };
  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${colors[color] || ''}`}>
      {children}
    </span>
  );

  



};

export default Dashboard;
