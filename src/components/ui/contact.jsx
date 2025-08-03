"use client";
import { useState } from 'react';
import emailjs from '@emailjs/browser'; // Updated import
import React from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    emailjs
      .send(
        'service_z9nhalv',
        'template_75ml66c',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        '2Yxr4VI9VnIdhoCeX'
      )
      .then(() => {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setFormStatus('Error occurred while sending the message.');
      });
  };

  return (
    <div className="min-h-screen md:pt-32 pt-20 text-white p-4 md:p-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className='text-2xl md:text-5xl font-bold text-white mb-8 text-center'>
          Contact <span className="text-blue-500">Me</span>
        </h2>
        
        <div className="max-w-xl mx-auto">
          <div className='bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700'>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
            
            {formStatus && (
              <p className={`text-center text-sm mt-4 ${
                formStatus.includes('successfully') ? 'text-green-400' : 
                formStatus.includes('Error') ? 'text-red-400' : 'text-gray-300'
              }`}>
                {formStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
