import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './addproduct.css';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Handle logout functionality
  };

  return (
    <div className="user-icon">
      <FaUser className="user-icon" onClick={handleToggleDropdown} />
      {isOpen && (
        <div className="user-options">
          <Link to="/viewproducts" onClick={handleToggleDropdown}>
            View Listings
          </Link>
          <Link to="/addproduct" onClick={handleToggleDropdown}>
            Add Listings
          </Link>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
