import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import Tangerine from '../assets/z9vkyDW9brw.png';
import Orange from '../assets/nibgG33H0F8.png';
import Cucumber from '../assets/Za9HGBK5ALA.png';

const fruits = [
  { id: 1, name: 'Orange', price: 8.00, img: Orange, description: 'Oranges are rich in Vitamin C, fiber, and antioxidants that boost your immune system and aid in digestion.' },
  { id: 2, name: 'Cucumber', price: 11.76, img: Cucumber, description: 'Cucumbers are hydrating and low in calories. They provide antioxidants and essential nutrients that help maintain skin health and reduce inflammation.' },
  { id: 3, name: 'Tangerine', price: 6.40, img: Tangerine, description: 'Tangerines are a good source of Vitamin C and fiber. They support immune health, aid in digestion, and provide a refreshing flavor.' },
];

const FruitList = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => {
      const currentQuantity = prevQuantities[id] || 1;
      const newQuantity = Math.max(1, currentQuantity + delta);
      return {
        ...prevQuantities,
        [id]: newQuantity
      };
    });
  };

  return (
    <div
      className={`flex ${isDarkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-800'} min-h-screen items-center justify-center`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex-1 p-8 max-w-4xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className={`text-5xl font-bold tracking-tight ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            Fresh Fruits
          </h1>
          <button
            onClick={toggleDarkMode}
            className={`px-6 py-3 rounded-full shadow-lg ${
              isDarkMode ? 'bg-gray-800 text-green-300' : 'bg-gray-200 text-gray-700'
            } border-2 border-gray-300 hover:bg-gray-600 transition-colors duration-300 text-sm font-semibold`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className={`p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:bg-green-50 hover:shadow-2xl relative`}
            >
              <img
                src={fruit.img}
                alt={fruit.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-green-400 mb-4 transform transition-transform duration-500 hover:rotate-12 hover:scale-110"
              />
              <Link to={`/fruits/${fruit.id}`}>
                <h3 className={`text-2xl font-bold text-center mb-3 ${
                  isDarkMode ? 'text-yellow-300' : 'text-green-600'
                }`}>
                  {fruit.name}
                </h3>
              </Link>
              <p className={`text-sm mb-6 text-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {fruit.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-gray-900">
                  ${((quantities[fruit.id] || 1) * fruit.price).toFixed(2)}
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(fruit.id, -1)}
                    className="w-8 h-8 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-all duration-200 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold mx-4">
                    {quantities[fruit.id] || 1}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(fruit.id, 1)}
                    className="w-8 h-8 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all duration-200 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FruitList;
