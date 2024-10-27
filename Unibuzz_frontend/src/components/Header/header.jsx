import React from 'react';

const Header = () => {
  const user = false;

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-8">
        {/* Left Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-yellow-500 mr-2">UB</div>
          <div className="text-xl font-semibold text-gray-900">UniBuzz</div>
          <p className="ml-2 text-sm text-gray-600">Connect. Engage. Empower.</p>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-700">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/community" className="hover:text-black">Community</a>
          <a href="/events" className="hover:text-black">Events</a>
          <a href="/mentorship" className="hover:text-black">Mentorship</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </nav>

        {/* Right Section */}
       { 
        user?
        <div > Welcome Back {localStorage.getItem("user")} </div>:<div className="flex items-center space-x-4">
        <a href="/login" className="text-gray-700 hover:text-black">Log In</a>
        <a  href="/signup" className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-yellow-600">Join Now</a>
          
        
      </div>
       }
      </div>
    </header>
  );
};

export default Header;
