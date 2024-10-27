import React from "react";

const CallForMentors = () => {
  return (
    <section className="py-20 px-6 bg-yellow-500 relative">
      <div className="max-w-4xl mx-auto bg-white p-10 text-center shadow-lg relative z-10">
        <h2 className="text-4xl font-bold mb-6">Call for Mentors</h2>
        <p className="text-lg text-gray-700 mb-8">
          Join us at <strong>UniBuzz</strong> and become a mentor to make a
          difference in the lives of others. Share your knowledge, inspire
          growth, and empower individuals to reach their full potential.
          Experience the joy of giving back and shaping a brighter future.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 font-bold">
          Register as Mentor
        </button>
      </div>

      {/* Geometric shapes background */}
      <div className="absolute inset-0 flex justify-between items-center">
        <div className="w-32 h-32 bg-yellow-700" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}></div>
        <div className="w-32 h-32 bg-yellow-700" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", transform: "rotate(180deg)" }}></div>
      </div>
    </section>
  );
};

export default CallForMentors;
