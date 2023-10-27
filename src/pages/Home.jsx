import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useState, useEffect } from "react";
import "./MainPage.css";


function MainPage() {
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Initialize items when the component mounts
    setItems([]);
  }, []);

  const addItem = () => {
    if (inputItem.trim() === '') {
      return;
    }

    setItems([...items, inputItem]);
    setInputItem('');
  };

  const selectRandomItem = () => {
    if (items.length === 0) {
      alert('No names to select from.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    const itemToSelect = items[randomIndex];

    setSelectedItem(itemToSelect);

    // Update selected items and remove the selected item from the original list
    setSelectedItems([...selectedItems, itemToSelect]);
    setItems(items.filter((item) => item !== itemToSelect));
  };

  return (
    <div className="main-container">
      <h2>Main Page</h2>
      {/* <button className="logout-button" onClick={onLogout}>
        Logout
      </button> */}

      <div>
        <input
          type="text"
          placeholder="Enter a name"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button onClick={addItem}>Add a name</button>
      </div>

      <div>
        <h3>Names:</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Total Names: {items.length}</p>
      </div>

      <div>
        <button className="random-item-button" onClick={selectRandomItem}>
          Select Random Name
        </button>
        {selectedItem && <p>Selected Name: {selectedItem}</p>}
      </div>

      <div>
        <h3>Selected Names:</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


const Home = () => {

    const navigate =useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login")
    }
  return (
    <div>
        {/* <h1>Welcome to React Firebase Auth using email and password</h1> */}
        <MainPage />
        <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Home