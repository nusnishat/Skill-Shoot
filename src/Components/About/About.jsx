import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 bg-gray-50">
      {/* Left Section - Image and Icons */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative">
          <img
            src="https://via.placeholder.com/300" // Replace this with the actual image source
            alt="Person"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-semibold">How to build a team</p>
            <p className="text-xs text-gray-500">Today at 7:00 AM</p>
            <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
              Join Now
            </button>
          </div>
          <div className="absolute top-[-20px] left-[-20px]">
            <div className="p-2 bg-purple-500 text-white rounded-full shadow-lg">
              {/* Icon */}
              📱
            </div>
          </div>
          <div className="absolute bottom-[-20px] right-[-20px]">
            <div className="p-2 bg-orange-500 text-white rounded-full shadow-lg">
              {/* Icon */}
              ✏️
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Text and Stats */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          Let us <span className="text-green-700">Skill Shoot</span>
        </h2>
        <p className="mt-4 text-gray-600">
          We are a company engaged in education with the aim of improving the skills of many people so that younger people can reach the career paths they want.
        </p>
        <p className="mt-2 text-gray-600">
          We have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
        </p>

        <div className="mt-8 flex flex-wrap justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-pink-500 text-white rounded-full">
              {/* Icon */}
              👥
            </div>
            <p className="text-gray-800"><span className="font-bold">15K</span> People Join</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-2 bg-yellow-500 text-white rounded-full">
              {/* Icon */}
              🌟
            </div>
            <p className="text-gray-800">Trusted Mentor</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-500 text-white rounded-full">
              {/* Icon */}
              🎥
            </div>
            <p className="text-gray-800"><span className="font-bold">30+</span> Free Videos</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-500 text-white rounded-full">
              {/* Icon */}
              🎓
            </div>
            <p className="text-gray-800"><span className="font-bold">100+</span> Premium Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
