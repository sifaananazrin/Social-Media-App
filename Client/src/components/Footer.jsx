// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mb-0">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <p>&copy; 2023 Your App Name. All rights reserved.</p>
        <div>
          <a href="/privacy" className="mr-4">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
