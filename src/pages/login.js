import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

import './login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await loginUser(form);
      console.log('Login response:', response);

      // Axios treats any 2xx as success
      if (response.data && response.data.token) {
        const { token, user } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user || {}));

        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate("/dashboard"), 500);
      } else {
        // This handles cases where 200 OK is returned but body is unexpected
        setMessage("Unexpected response from server.");
      }

    } catch (error) {
      console.error('Login error:', error);

      // If the backend sends a 400 or 401, Axios throws an error and lands here
      const errorMsg = error.response?.data?.message || "Invalid email or password.";
      setMessage(errorMsg);
    }
  };



  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white overflow-hidden">
      {/* Visual Side */}
      <div className="hidden lg:block relative overflow-hidden">
        <img
          src="assets/images/2a7c7b57f3dfa54684927e118e4579e2.jpg"
          alt="Beauty Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-pink-900/10 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
          <div className="bg-white/20 backdrop-blur-xl p-12 rounded-[60px] border border-white/30 shadow-2xl">
            <h1 className="text-6xl font-bold playfair mb-6 tracking-tight">GlowMuse</h1>
            <p className="text-xl font-medium tracking-widest uppercase opacity-90">Crafting Radiance</p>
            <div className="w-16 h-1 bg-white/50 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex items-center justify-center p-8 sm:p-12 md:p-24 bg-soft-cream/30">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 playfair mb-2">Welcome Back</h2>
            <p className="text-gray-500 font-medium">Please enter your credentials to access your muse.</p>
          </div>

          {message && (
            <div className={`p-4 rounded-2xl mb-8 text-sm font-semibold border ${message.includes('successful')
                ? 'bg-green-50 text-green-700 border-green-100'
                : 'bg-red-50 text-red-700 border-red-100'
              }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <input
                type="email"
                className="w-full bg-white border border-pink-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 shadow-sm"
                placeholder="muse@glow.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Password</label>
              <input
                type="password"
                className="w-full bg-white border border-pink-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 shadow-sm"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm py-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-400" />
                <span className="text-gray-500 group-hover:text-gray-700 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-pink-600 font-bold hover:text-pink-700 transition-colors">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-pink-200 active:scale-95 transform mt-4"
            >
              Sign In
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-500 font-medium">
              New to GlowMuse?&nbsp;
              <a href="/register" className="text-pink-600 font-bold hover:underline">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Login;
