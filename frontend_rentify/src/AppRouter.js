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
          <li key={item.customer_id}>{item.customer_name}</li>
        ))}
      </ul>    
    </div>
  );
};

export default App;
