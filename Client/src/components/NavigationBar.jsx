// NavigationBar.js (example from previous response)
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">Your App Name</Link>
        <div className="flex items-center">
          <Link to="/" className="mr-6 text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <Link to="/chat" className="mr-6 text-blue-600 hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 6v4l5 5-5 5V6z" />
            </svg>
          </Link>
          <Link to="/notifications" className="text-blue-600 hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H6a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v11a2 2 0 01-2 2m-1 0h5l-1 5H8l-1-5h5z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
