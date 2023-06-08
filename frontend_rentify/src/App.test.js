import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import RentForm from './components/RentForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/rent/:productId" component={RentForm} />
      </Switch>
    </Router>
  );
};

export default App;
