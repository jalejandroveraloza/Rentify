// src/components/RentForm.js
import React, { useState } from 'react';

const RentForm = ({ match }) => {
  const productId = match.params.productId;
  const [rentalDays, setRentalDays] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle rental submission logic
    console.log(`Product ID: ${productId}, Rental Days: ${rentalDays}`);
    // Reset form fields
    setRentalDays('');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Rent Form</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="rentalDays" className="block mb-2 font-bold">
            Rental Days
          </label>
          <input
            type="text"
            id="rentalDays"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter the number of days"
            value={rentalDays}
            onChange={(e) => setRentalDays(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-center hover:bg-blue-600"
        >
          Rent Now
        </button>
      </form>
    </div>
  );
};

export default RentForm;
