<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make an HTTP GET request to the server's API endpoint
      const response = await fetch('/api/users');
      const responseData = await response.json();

      // Update the data state with the fetched data
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      <h1>Test1</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
=======
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
>>>>>>> d5d7e9e801a755ee8478d045be5be9fbf24bea5e
    </div>
  );
};

export default App;
