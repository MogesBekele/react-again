import React, { useState } from 'react';

const Cart = ({ title, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <div>
        <button
          onClick={onEdit}
          className="mr-2 p-1 bg-yellow-500 text-white rounded-md"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="p-1 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState(''); // For input field
  const [nameList, setNameList] = useState([]); // For the list of names
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddName = () => {
    if (name && !nameList.includes(name)) {
      if (isEditing) {
        const updatedList = nameList.map((item, index) =>
          index === currentIndex ? name : item
        );
        setNameList(updatedList);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setNameList([...nameList, name]);
      }
      setName('');
    } else {
      alert('Name already exists or is empty');
    }
  };

  const handleDelete = (index) => {
    const updatedList = nameList.filter((_, i) => i !== index);
    setNameList(updatedList);
  };

  const handleEdit = (index) => {
    setName(nameList[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex space-x-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state as user types
            placeholder="Enter a name"
            className="mt-4 p-2 border border-gray-300 rounded-md flex-grow shadow-md"
          />
          <button
            onClick={handleAddName}
            className="mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md"
          >
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
        {nameList.map((name, index) => (
          <Cart
            key={index}
            title={name}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

