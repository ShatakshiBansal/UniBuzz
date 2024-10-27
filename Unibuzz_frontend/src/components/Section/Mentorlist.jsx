import React from "react";

const MentorsList = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mentor 1 */}
          <div className="shadow-lg p-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Mentor 1"
              className="w-full h-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-2">Mentor 1</h3>
            <button className="bg-yellow-500 text-white px-4 py-2 mb-4">
              Connect &rarr;
            </button>
            <p className="text-gray-600">
              Meet our expert consultants who are committed to understanding
              your requirements and delivering customized solutions. Benefit
              from our industry knowledge and experience.
            </p>
          </div>

          {/* Mentor 2 */}
          <div className="shadow-lg p-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Mentor 2"
              className="w-full h-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-2">Mentor 2</h3>
            <button className="bg-yellow-500 text-white px-4 py-2 mb-4">
              Connect &rarr;
            </button>
            <p className="text-gray-600">
              Experience seamless integration and support with our service
              offerings. Our team ensures smooth implementation and ongoing
              assistance to optimize your operations.
            </p>
          </div>

          {/* Mentor 3 */}
          <div className="shadow-lg p-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Mentor 3"
              className="w-full h-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-2">Mentor 3</h3>
            <button className="bg-yellow-500 text-white px-4 py-2 mb-4">
              Connect &rarr;
            </button>
            <p className="text-gray-600">
              Unlock the potential of your business with our innovative
              services. We focus on enhancing efficiency, productivity, and
              profitability to help you stay ahead in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsList;
