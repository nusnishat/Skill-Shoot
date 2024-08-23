import React from 'react';

const SubscribeCard = ({ plan }) => {
    const {price, duration, title, description, features} = plan;
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3 transform transition-transform hover:scale-105 hover:bg-green-700 hover:text-white">
      <h3 className="text-lg font-semibold text-gray-700 hover:text-white">
        ${price} <span className="text-base">/ {duration}</span>
      </h3>
      <h4 className="text-2xl font-bold text-gray-800 hover:text-white mt-2">{title}</h4>
      <p className="text-gray-500 hover:text-white mt-2">{description}</p>
      <ul className="mt-4 space-y-2 text-gray-600 hover:text-white">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
      <button className="mt-4 w-full py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-white hover:text-green-700">
        Choose plan
      </button>
    </div>
  );
};

export default SubscribeCard;
