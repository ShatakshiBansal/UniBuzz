import React from 'react';

const testimonials = [
  {
    quote: 'UniBuzz has been instrumental in helping me find mentorship opportunities and connect with like-minded peers. It’s a game-changer for enhancing the university experience.',
    name: 'Deena Levies',
    university: 'UC Berkeley',
  },
  {
    quote: 'The community engagement features on UniBuzz have allowed me to expand my network and participate in impactful events. It’s a must-have for every college student.',
    name: 'Tom Smithenson',
    university: 'Stanford University',
  },
  {
    quote: 'UniBuzz has provided me with invaluable resources to navigate my freshman year. The mentorship programs have been a guiding light in my academic journey.',
    name: 'Tilly Green',
    university: 'UCLA',
  },
];

const Testimonials = () => {
  return (
    <div className="flex justify-center gap-6 mt-10">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg w-80"
        >
          <div className="text-gray-600 text-sm">
            <p className="mb-4">"{testimonial.quote}"</p>
            <div className="mt-4 text-gray-800 font-semibold">
              {testimonial.name}
            </div>
            <div className="text-gray-500 text-sm">{testimonial.university}</div>
          </div>
          <div className="mt-4">
            <img
              src={`/path-to-your-plants-image-${index}.png`}
              alt="decorative plants"
              className="w-12"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
