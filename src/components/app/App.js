import React from 'react';
import './App.css';
import BusinessList from '../businesslist/BusinessList';
import SearchBar from '../searchbar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1><img id="logo" src="https://i.ibb.co/zhtG3mx/Logo.png" alt="Logo of hunger of what"/>Hunger of What?!</h1>
      <SearchBar />
      <BusinessList />
    </div>
  )
}

export default App;
