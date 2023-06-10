// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import RentForm from './components/RentForm';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/rent/:productId" element={<RentForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
  