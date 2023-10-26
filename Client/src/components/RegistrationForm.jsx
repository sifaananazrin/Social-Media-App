import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    photo: '',
  });

  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'photo' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('username', formData.username);
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await axios.post('http://localhost:3000/auth/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Registration successful:', response.data);
      navigate("/login");

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Register</h2>
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
          <div className="mb-4">
            <label className="block text-gray-100 text-sm mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="form-input border-none bg-gray-800 text-white p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm mb-1">Profile Picture</label>
            <input
              type="file"
              name="photo"
              accept=".jpg, .jpeg, .png"
              onChange={handleInputChange}
              className="form-input border-none bg-gray-800 text-white p-2 rounded-lg w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md w-full transition duration-300 ease-in-out">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
