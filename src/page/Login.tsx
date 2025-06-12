// src/pages/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../componens/CustomAlert';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'warning', message: string } | null>(null);
  const navigate = useNavigate();

  const showAlert = (type: 'success' | 'error' | 'warning', message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      showAlert('warning', 'Username dan Password harus diisi.');
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password
      });

      const token = response.data.data.token;
      localStorage.setItem("token", token);

      showAlert('success', 'Login berhasil! Mengarahkan...');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      showAlert('error', 'Login gagal. Periksa username dan password Anda!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {alert && <CustomAlert type={alert.type} message={alert.message} />}

      <div className="w-full max-w-md bg-amber-100 p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-50 to-[#3a37ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-1">Sign in to your account</h2>
        <p className="text-sm text-black text-center mb-6">Hello, Please enter your Account!</p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-semibold text-black">Gmail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Gmail"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-amber-400 text-black rounded-md hover:bg-amber-500">Sign in</button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-950" />
          <span className="mx-4 text-black text-sm">OR</span>
          <hr className="flex-grow border-gray-950" />
        </div>

        <div className="space-y-3">
          <button className="w-full py-2 px-4 border border-gray-300 bg-white rounded-md flex items-center justify-center hover:bg-amber-500">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-black">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
