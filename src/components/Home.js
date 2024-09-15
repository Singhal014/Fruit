import React from 'react';
import { Link } from 'react-router-dom';
import { FaLanguage } from 'react-icons/fa';

const Home = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen"
            style={{
                background: 'linear-gradient(135deg, #4b6cb7, #182848)', // Dark blue gradient background
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div className="text-center mb-8 px-4">
                {/* Solid color font for "Fruit.AI" */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
                    Fruit.AI
                </h1>
                <p className="text-lg md:text-xl text-gray-100 mt-2 italic tracking-wide">
                    "Be Healthy!"
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                <Link
                    to="/fruits"
                    className="flex items-center justify-center bg-red-500 text-white py-12 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                    style={{ width: '180px', height: '180px', fontSize: '20px', padding: '16px' }}
                >
                    <span className="font-extrabold text-2xl">
                        Chat
                    </span>
                </Link>
                <Link
                    to="/translator"
                    className="flex items-center justify-center bg-green-500 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                    style={{ width: '180px', height: '180px', fontSize: '20px', padding: '16px' }}
                >
                    <FaLanguage
                        size={40}
                        className="text-white"
                    />
                </Link>
                <Link
                    className="flex items-center justify-center bg-yellow-400 text-black rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    style={{ width: '180px', height: '180px', fontSize: '20px', padding: '16px' }}
                >
                    <span className="font-bold text-2xl">
                        FAQ
                    </span>
                </Link>
                <Link
                    to="/about"
                    className="flex items-center justify-center bg-purple-600 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                    style={{ width: '180px', height: '180px', fontSize: '20px', padding: '16px' }}
                >
                    <span className="font-bold text-2xl">
                        About
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Home;
