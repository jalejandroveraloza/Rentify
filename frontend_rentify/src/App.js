import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make an HTTP GET request to your API endpoint that retrieves user data from the database
      const response = await fetch('http://localhost:8000/api/users');
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
        {data.map(user => (
          <li key={user.id}>
            <div>
              <h3>Name: {user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Address: {user.address}</p>
            </div>
          </li>
        ))}
      </ul>    
    </div>
  );
};

export default App;
