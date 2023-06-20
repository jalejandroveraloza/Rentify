import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './addproduct.css';

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);
  
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/category');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
  <>
   {loading ? (
              <p>Loading categories...</p>
            ) : (
              <select
    id="category"
    name="category"
    value={props.categoryId}
    onChange={(e) => props.setCategoryId(e.target.value)}
    required
  >
    <option value="">Select a category</option>
    {categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ))}
    </select>
              )}
    
  </>
  );

};
export default Category;
