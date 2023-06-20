import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './addproduct.css';
import Category from './Category'; // Import the CategoryId hook

const AddProduct = (props) => {

  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [active, setActive] = useState(true);
  const [listingSuccess, setListingSuccess] = useState(false);

  const handleCreateListing = async (e) => {
    e.preventDefault();
    if (!props.isLoggedIn) {
      alert("Please login to continue");
      return ;
    }
    try {
      const user = JSON.parse(props.loggedUser);
      const response = await fetch('http://localhost:8000/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category_id: categoryId,
          name,
          price,
          description,
          photo_url: photoUrl,
          active,
          user_id: user.id,
        }),
      });

      if (response.ok) {
        setListingSuccess(true);
        setTimeout(() => {
          navigate('/viewproducts');
        }, 2000);
      } else {
        const errorData = await response.json();
        console.log('Listing creation error:', errorData);
      }
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  return (
    <div className="create-listing-container">
      <div className="create-listing-box">
        <h2 className="create-listing-title">Create Listing</h2>
        {listingSuccess && <p className="listing-success">Listing created successfully!</p>}
        <form onSubmit={handleCreateListing}>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
              <Category categoryId={categoryId} setCategoryId={setCategoryId}/> 
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="photoUrl">Photo URL:</label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="active">Active:</label>
            <select
              id="active"
              name="active"
              value={active}
              onChange={(e) => setActive(e.target.value === 'true')}
              required
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <button type="submit" className="create-listing-button">
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
