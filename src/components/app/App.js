import React from 'react';
import './App.css';
import BusinessList from '../businesslist/BusinessList';
import SearchBar from '../searchbar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <BusinessList />
      <SearchBar />
    </div>
  )
}

export default App;
