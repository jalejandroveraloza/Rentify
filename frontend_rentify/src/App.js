// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import RentForm from './components/RentForm';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <div className="container mx-auto py-8">
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/rent/:productId" component={RentForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
