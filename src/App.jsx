import React, { useState } from 'react';

const Cart = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState(''); // For input field
  const [nameList, setNameList] = useState([]); // For the list of names

  const handleAddName = () => {
    if (name.trim()) {
      setNameList([...nameList, name]); // Add the current name to the list
      setName(''); // Clear the input field
    }
  };

  return (
    <>
      <div>
        {nameList.map((name, index) => (
          <Cart key={index} title={name} /> // Render each name as a Cart component
        ))}
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update name state as user types
        placeholder="Enter a name"
      />
      <button onClick={handleAddName}>Add List</button>
    </>
  );
};

export default App;
