import React, { useState, useEffect } from 'react';
import './viewproducts.css';
import Category from './Category';

const ViewProducts = (props) => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(props.loggedUser);
  const userId = user.id;

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

  const handleUpdateProduct = async (productId) => {
    try {
      const updatedProduct = {
        // Provide the updated product data here
        name: 'Updated',
        description: 'Updated Product Description',
        category_id: 'Updated Category ID',
        photo_url: 'Updated Photo URL',
        price: 'Updated Price',
        active: true,
      };

      const response = await fetch(`http://localhost:8000/api/product/${userId}/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        // Update the products list with the updated product
        const updatedProducts = products.map((product) =>
          product.id === productId ? { ...product, ...updatedProduct } : product
        );
        setProducts(updatedProducts);
        console.log('Product updated successfully');
      } else {
        console.log('Error updating product:', response.status);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/product/${userId}/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted product from the products list
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        console.log('Product deleted successfully');
      } else {
        console.log('Error deleting product:', response.status);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="view-products-container">
      <div className="view-products-box">
        <h2 className="view-products-title">View Listings</h2>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Category categoryId={product.category_id} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <img src={product.photo_url} alt={product.name} className="product-image" />
                  </td>
                  <td>{product.active ? 'Yes' : 'No'}</td>
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => handleUpdateProduct(product.id)}>Update</button>
                      <button onClick={() => handleDeleteProduct(product.id)} className="delete-button">Delete</button>
                    </div>
                  </td>
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
