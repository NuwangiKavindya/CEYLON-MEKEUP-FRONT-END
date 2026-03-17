import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth"


import './register.css';

const Register = () => {
    const [form, setForm] = useState({ firstname: '', secondname: '', dateofbirth: '', email: '', password: '' });
    const [messages, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = async (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await register(form);
            console.log('registration response:', res);
            setMessage(res.data.message || 'Registration successful!');
            setTimeout(() => navigate('/login'), 2000);
        }
        catch (error) {
            console.error('Registration error:', error);
            const errorMsg = error.response?.data?.error ||
                error.response?.data?.message ||
                error.message ||
                'Registration failed.';
            setMessage(errorMsg);
        }
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-white overflow-hidden">
            {/* Visual Side */}
            <div className="hidden lg:block relative overflow-hidden">
                <img
                    src="assets/images/2a7c7b57f3dfa54684927e118e4579e2.jpg"
                    alt="Beauty Registration"
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-pink-900/10 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
                    <div className="bg-white/20 backdrop-blur-xl p-12 rounded-[60px] border border-white/30 shadow-2xl">
                        <h1 className="text-6xl font-bold playfair mb-6 tracking-tight">Join the Muse</h1>
                        <p className="text-xl font-medium tracking-widest uppercase opacity-90">Start Your Glow Journey</p>
                        <div className="w-16 h-1 bg-white/50 mx-auto mt-8 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="flex items-center justify-center p-8 sm:p-12 md:p-16 bg-soft-cream/30 overflow-y-auto">
                <div className="w-full max-w-lg py-12">
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 playfair mb-2">Create Account</h2>
                        <p className="text-gray-500 font-medium">Join our community of beauty enthusiasts.</p>
                    </div>

                    {messages && (
                        <div className={`p-4 rounded-2xl mb-8 text-sm font-semibold border ${messages.includes('successful')
                            ? 'bg-green-50 text-green-700 border-green-100'
                            : 'bg-red-50 text-red-700 border-red-100'
                            }`}>
                            {messages}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={form.firstname}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-pink-100 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 shadow-sm"
                                    placeholder="Jane"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                                <input
                                    type="text"
                                    name="secondname"
                                    value={form.secondname}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-pink-100 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 shadow-sm"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Date of Birth</label>
                            <input
                                type="date"
                                name="dateofbirth"
                                value={form.dateofbirth}
                                onChange={handleChange}
                                className="w-full bg-white border border-pink-100 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 shadow-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full bg-white border border-pink-100 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 shadow-sm"
                                placeholder="jane@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full bg-white border border-pink-100 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 shadow-sm"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="py-2">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-gray-300 text-pink-500 focus:ring-pink-400 shrink-0" />
                                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed">
                                    Receive notifications about new arrivals, sales, and special offers from GlowMuse.
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-pink-200 active:scale-95 transform mt-4"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-gray-500 font-medium">
                            Already have an account?&nbsp;
                            <a href="/login" className="text-pink-600 font-bold hover:underline">Sign in instead</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;