import React from 'react';
import { Link } from 'react-router-dom';
import vector from "../assets/Vector.png";

const About = () => {
    return (
        <div className="bg-gradient-to-br from-teal-300 via-teal-100 to-blue-200 min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md mx-auto border-t-4 border-teal-500">
                <div className="mb-6">
                    <img
                        src={vector}
                        alt="Blurry logo of Fruit.AI"
                        className="mx-auto w-24 h-24 object-contain"
                    />
                </div>
                <h1 className="text-3xl font-extrabold text-teal-600 mb-4">
                    Fruit.AI
                </h1>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
                </p>
                <Link to="/home">
                    <button className="bg-teal-600 text-white py-2 px-6 rounded-full font-bold text-lg hover:bg-teal-700 transition-colors duration-300">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
