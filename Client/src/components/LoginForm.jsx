import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-black p-6 pt-8 pb-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input border-none bg-gray-800 text-white p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input border-none bg-gray-800 text-white p-2 rounded-lg w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md w-full transition duration-300 ease-in-out">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
