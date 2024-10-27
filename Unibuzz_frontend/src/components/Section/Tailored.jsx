import React from "react";

const benefits = [
  {
    icon: "📋", // You can replace this with an actual icon or image
    title: "All-Inclusive Platform",
  },
  {
    icon: "🌐", // You can replace this with an actual icon or image
    title: "Integrated Community Networks",
  },
  {
    icon: "✏️", // You can replace this with an actual icon or image
    title: "Empowering Personal Expression",
  },
];

const TailoredForSuccess = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-16 bg-white">
      {/* Left Side Illustration */}
      <div className="flex flex-col items-center justify-center">
        <img
          src="/path/to/your/main-illustration.png" // Update this with the correct path
          alt="Illustration"
          className="max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Right Side Content */}
      <div className="mt-8 md:mt-0 md:ml-16 max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tailored for Student Success
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          UniBuzz is crafted by students, for students. Our platform is designed
          to enhance your university experience, foster creativity, and provide
          essential tools for academic and personal achievement.
        </p>

        {/* Benefits */}
        <div className="flex justify-start items-start space-x-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="text-2xl">{benefit.icon}</div>
              <span className="text-sm font-medium text-gray-900">
                {benefit.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TailoredForSuccess;
