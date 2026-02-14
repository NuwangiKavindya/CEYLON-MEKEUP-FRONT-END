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
    
<div
  className="d-flex vh-100 justify-content-start align-items-center flex-grow-0 mr-5 bg-cover bg-center"
  style={{
    backgroundImage: "url('assets/images/2a7c7b57f3dfa54684927e118e4579e2.jpg')"
  }}
>
<div className="flex-shrink-0 ml-[3cm] mt-[2cm] mb-[2cm] flex items-center justify-center hover:scale-105">
  <img
    src="assets/images/43a3af87d03e8b80bafbc58f405fbb45.jpg"
    alt="Login Visual"
    className="w-[20cm] h-[15cm] object-cover rounded-lg  shadow-lg"
  />
</div>

      <div
  className="card p-4 shadow-lg  bg-pink-100 bg-transparent"
  style={{ width: "32rem" }}
>

        
        <div className="card"></div>
        <h2 className="text-center mb-4">Login</h2>

        {message && (
          <div className="alert alert-danger">{message}</div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

         <button
  type="submit"
  className="w-100 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition"
>
  Login
</button>


          <div className="r-page mt-3 text-center">
            <p>
              Need to create an account?&nbsp;
              <a href="/register">Register now</a>
            </p>
          </div>
        </form>
      </div>


    </div>
  );
}

export default Login;
