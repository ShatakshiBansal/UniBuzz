import React from "react";

const features = [
  {
    title: "Events & Bulletin Boards",
    description:
      "Stay updated with the latest campus events, workshops, and extracurricular activities. Engage with your peers through bulletin boards and stay informed about the happenings in your university.",
    imageUrl: "/path/to/your/first-image.png",
  },
  {
    title: "Community Engagement",
    description:
      "Join vibrant communities within your university and beyond. Share your experiences, seek advice, and connect with like-minded individuals who are passionate about personal and professional development.",
    imageUrl: "/path/to/your/second-image.png",
  },
  {
    title: "Mentorship Programs",
    description:
      "Access mentorship programs designed to guide, inspire, and support your academic and career pursuits. Leverage the wisdom and experience of alumni mentors to navigate your university journey.",
    imageUrl: "/path/to/your/third-image.png",
  },
];

const FeatureCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img src={imageUrl} alt={title} className="w-48 h-48 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="flex justify-between p-16 pt-4 mt-[-64px] bg-white">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imageUrl={feature.imageUrl}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
