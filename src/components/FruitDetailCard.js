import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const FruitDetailCard = ({ fruit }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white border-white-600' : 'bg-white text-gray-900 border-yellow-600'
      } border-4 ${
        isDarkMode ? 'border-white-600' : 'border-yellow-600'
      } transform hover:scale-105`}
    >
      <img
        src={fruit.img}
        alt={fruit.name}
        className="w-40 h-40 object-cover rounded-full border-4 border-white-600 mb-4 transition-transform duration-300 transform hover:scale-110"
      />
      <h1 className={`text-3xl font-bold mb-2 ${
        isDarkMode ? 'text-red-400' : 'text-yellow-700'
      }`}>
        {fruit.name}
      </h1>
      <p className={`text-xl font-semibold mb-4 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-800'
      }`}>
        ${fruit.price.toFixed(2)}
      </p>
      <p className={`text-lg ${
        isDarkMode ? 'text-gray-400' : 'text-gray-700'
      }`}>
        {fruit.description}
      </p>
    </div>
  );
};

export default FruitDetailCard;
