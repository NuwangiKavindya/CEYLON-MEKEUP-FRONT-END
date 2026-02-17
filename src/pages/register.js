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






        <div className="main-register h-screen w-full flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('assets/images/2a7c7b57f3dfa54684927e118e4579e2.jpg')" }}>
            <div className=" p-4 shadow-lg bg-pink-100 rounded-xl " style={{ width: "35rem" }}>

                <h2 className="text-center mb-4">New User Registration</h2>

                <form onSubmit={handleSubmit}>

                    <div className="alert alert-danger"></div>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            value={form.firstname}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter First Name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Second Name</label>
                        <input
                            type="text"
                            name="secondname"
                            value={form.secondname}
                            onChange={handleChange}
                            placeholder="Enter Second Name"
                            className="form-control"
                            required

                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            name="dateofbirth"
                            placeholder="0000/00/00"
                            value={form.dateofbirth}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="mail"
                            name="email"
                            placeholder="Enter Email"
                            value={form.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label"> Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" /> Recive Notifications about new arrivals and sales,special offers

                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Register
                    </button>


                    <h5 className="line">Sign in and get extra benifits with GlowMuse</h5>

                    <div className="back-to-login">
                        <p>Alredy Have Account? <a href="/login">Login Here</a></p>
                    </div>
                    <p>{messages}</p>

                </form>


            </div>


        </div>



    );
}
export default Register;