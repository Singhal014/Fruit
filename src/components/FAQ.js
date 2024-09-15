import React, { useEffect, useState } from 'react';
import { getFaqs, addFaq, updateFaq, deleteFaq } from '../services/api';
import FAQCard from './FAQCard';
import Tangerine from '../assets/z9vkyDW9brw.png';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newFaqs, setNewFaqs] = useState([]);

  useEffect(() => {
    getFaqs()
      .then(response => setFaqs(response.data))
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      addFaq(newQuestion)
        .then(response => {
          setFaqs([...faqs, response.data]);
          setNewFaqs([...newFaqs, response.data]);
          setNewQuestion('');
        })
        .catch(error => console.error('Error adding FAQ:', error));
    }
  };

  const handleUpdate = (faq) => {
    const newQuestion = prompt('Enter the new question:', faq.question);
    if (newQuestion && newQuestion !== faq.question) {
      updateFaq(faq.id, newQuestion)
        .then(response => {
          setFaqs(faqs.map(f => (f.id === faq.id ? response.data : f)));
          setNewFaqs(newFaqs.map(f => (f.id === faq.id ? response.data : f))); 
        })
        .catch(error => console.error('Error updating FAQ:', error));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      deleteFaq(id)
        .then(() => {
          setFaqs(faqs.filter(faq => faq.id !== id));
          setNewFaqs(newFaqs.filter(faq => faq.id !== id));
        })
        .catch(error => console.error('Error deleting FAQ:', error));
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-10 min-h-screen">
      <h1 className="text-white text-4xl font-bold text-center mb-10">FAQ Section</h1>

      {/* Form to add a new FAQ */}
      <div className="max-w-4xl mx-auto mb-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add New FAQ</h2>
        <form onSubmit={handlePost} className="flex flex-col space-y-4">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Enter a new FAQ question"
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add FAQ
          </button>
        </form>
      </div>

      {/* Display FAQs */}
      <div className="flex flex-col items-center space-y-6 md:flex-row md:flex-wrap md:justify-center md:space-x-6">
        {faqs.map(faq => (
          <FAQCard
            key={faq.id}
            image={Tangerine}
            fruit="Tangerine"
            question={faq.question}
            answer="Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health." // Replace with actual answer
            onUpdate={() => handleUpdate(faq)}
            onDelete={() => handleDelete(faq.id)}
            isNew={newFaqs.some(newFaq => newFaq.id === faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;