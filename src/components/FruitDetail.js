import React from 'react';
import { useParams } from 'react-router-dom';
import FruitDetailCard from './FruitDetailCard';
import { useDarkMode } from '../context/DarkModeContext';
import Tangerine from '../assets/z9vkyDW9brw.png';
import Orange from '../assets/nibgG33H0F8.png';
import Cucumber from '../assets/Za9HGBK5ALA.png';

const fruits = [
    { id: 1, name: 'Orange', price: 8.00, img: Orange, description: 'Oranges are rich in Vitamin C, fiber, and antioxidants that boost your immune system and aid in digestion.' },
    { id: 2, name: 'Cucumber', price: 11.76, img: Cucumber, description: 'Cucumbers are hydrating and low in calories. They provide antioxidants and essential nutrients that help maintain skin health and reduce inflammation.' },
    { id: 3, name: 'Tangerine', price: 6.40, img: Tangerine, description: 'Tangerines are a good source of Vitamin C and fiber. They support immune health, aid in digestion, and provide a refreshing flavor.' },
  ];
  

const FruitDetail = () => {
  const { id } = useParams();
  const { isDarkMode } = useDarkMode();
  const fruit = fruits.find(fruit => fruit.id === parseInt(id, 10));

  if (!fruit) {
    return <div className="text-center text-xl">Fruit not found</div>;
  }

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-6 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <FruitDetailCard fruit={fruit} />
    </div>
  );
};

export default FruitDetail;
