import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [appName, setAppName] = useState('');
  const [appDescription, setAppDescription] = useState('');

  useEffect(() => {
    axios.get('/api/homepage') 
      .then(response => {
        setAppName(response.data.message);
        setAppDescription(response.data.description);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Display MultiServe.AI */}
        <h1 className="text-3xl font-semibold">{appName}</h1>
        
        {/* Short description */}
        <p className="text-lg mt-2">
          {appDescription}
        </p>
      </header>
    </div>
  );
}

export default App;
