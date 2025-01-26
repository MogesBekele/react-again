import React, { useEffect, useState } from 'react';

const Cart = ({ title }) => {
  useEffect(()=>{
    console.log('mounted')
  },[])
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
    if (name && !nameList.includes(name)) {
      setNameList([...nameList, name]);
      setName('');
    } else {
      alert('Name already exists or is empty');
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
      <img src="./movies.png" alt="" />
    </>
  );
};

export default App;

