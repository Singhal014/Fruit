import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/faqs';

// Fetch all FAQs
export const getFaqs = () => {
  return axios.get(API_URL).then(response => {
    // Log the response to check the structure
    console.log(response.data);
    return response;
  });
};

// Add a new FAQ
export const addFaq = (question) => {
  return axios.post(API_URL, { question });
};

// Update an FAQ
export const updateFaq = (id, updatedQuestion) => {
  return axios.put(`${API_URL}/${id}`, { question: updatedQuestion });
};

// Delete an FAQ
export const deleteFaq = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};