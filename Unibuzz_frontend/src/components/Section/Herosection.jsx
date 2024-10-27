import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-24 bg-white">
      {/* Left Text Section */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Connect. Engage. Empower.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          UniBuzz empowers college students and alumni with a platform for events bulletin, 
          community, and mentorship.
        </p>
        <button className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 mb-8">
          Join Now
        </button>
        
        {/* Features Section */}
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              {/* You can replace this with an icon */}
              <span className="text-2xl">🔋</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-600">Empowerment <br /> & Connectivity</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              {/* You can replace this with an icon */}
              <span className="text-2xl">🟦</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-600">Inclusivity <br /> & Support</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              {/* You can replace this with an icon */}
              <span className="text-2xl">🔗</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-600">Fostering <br /> Growth</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mt-8 lg:mt-0 lg:ml-16">
        <img
          src="/path/to/your/image.png"
          alt="Empowering People"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
