// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10/day' },
    { id: 2, name: 'Product 2', price: '$15/day' },
    { id: 3, name: 'Product 3', price: '$20/day' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <Link
              to={`/rent/${product.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-center hover:bg-blue-600"
            >
              Rent Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
