import React from 'react';

const FAQCard = ({ image, fruit, question, answer, onUpdate, onDelete, isNew }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 w-full max-w-md transition transform hover:-translate-y-2">
      <div className="w-16 h-16">
        <img
          className="object-cover rounded-full"
          src={image}
          alt={fruit}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-red-500 text-lg font-semibold">{fruit}</h2>
        <h3 className="text-blue-700 text-md font-bold">{String(question)}</h3>
        <p className="text-gray-600 mt-2">{answer}</p>
        {(
          <div className="flex space-x-4 mt-4">
            <button
              onClick={onUpdate}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Update
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQCard;