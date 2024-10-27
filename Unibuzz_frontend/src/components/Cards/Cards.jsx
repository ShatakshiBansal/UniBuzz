import React from 'react';

const Cards = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Event Banner */}
      <div className="relative">
        <img
          src="path-to-your-image" // Replace with actual image path
          alt="Tech for Change Banner"
          className="w-full h-48 object-cover"
        />
      </div>
      
      {/* Event Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Tech For Change</h2>
        <p className="text-gray-600 mt-4">
          We are excited to announce our upcoming event that brings together
          industry leaders, entrepreneurs, and innovators to share their
          insights and experiences.
        </p>
        <a
          href="register-link" // Replace with actual registration link
          className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition duration-300"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Cards;
