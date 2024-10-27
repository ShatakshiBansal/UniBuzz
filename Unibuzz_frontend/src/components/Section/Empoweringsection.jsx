import React from 'react';

const EmpoweringSection = () => {
  return (
    <section className="relative bg-yellow-400 text-black py-20 px-8 lg:px-24 overflow-hidden">
      {/* Curved Top Background */}
      <div className="absolute inset-0 top-0 h-48 -mt-10 bg-yellow-500">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f7b500" // Yellow curve
            d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,218.7C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Title Section */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl lg:text-6xl font-bold leading-snug">
            Empowering College <br /> Communities
          </h2>
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 text-left">
          <p className="text-lg lg:text-xl leading-relaxed">
            UniBuzz is dedicated to providing a supportive and inclusive online space
            where college students and alumni can connect, engage, and grow together.
            Our platform fosters a sense of belonging and facilitates meaningful
            interactions within the university community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
