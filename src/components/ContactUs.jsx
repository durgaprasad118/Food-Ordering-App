import React from "react";
import { useState } from "react";
const Contact=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic here to handle form submission (e.g., sending an email, saving data, etc.)
      // For demonstration purposes, we will just log the form data to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 py-2 border border-sm border-slate-600 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 py-2 border border-sm border-slate-600 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 border border-sm border-slate-600 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <button
              onClick={()=>{
                alert("Thanks for sending this message✅")
              }}
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Contact;