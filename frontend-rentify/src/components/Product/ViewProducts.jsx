import React, { useState, useEffect } from 'react';
import './addproduct.css';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const userId = 1; // Set the user ID to the desired value

  useEffect(() => {
    fetchProductsByUserId(userId);
  }, [userId]);

  const fetchProductsByUserId = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/product/user/${userId}`);
      if (response.ok) {
        const productsData = await response.json();
        setProducts(productsData);
      } else {
        console.log('Error retrieving products:', response.status);
      }
    } catch (error) {
      console.error('Error retrieving products:', error);
    }
  };

  return (
    <div className="create-listing-container">
      <div className="create-listing-box">
        <h2 className="create-listing-title">View Products</h2>
        {products.length === 0 ? (
          <p className="no-products-message">No products found for this user.</p>
        ) : (
          <table className="products-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Photo</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.category_id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <img src={product.photo_url} alt={product.name} className="product-image" />
                  </td>
                  <td>{product.active ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
