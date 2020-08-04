import React from 'react';
import './App.css';
import BusinessList from '../businesslist/BusinessList';
import SearchBar from '../searchbar/SearchBar';

const business = {
  imageSrc: 'https://i.ibb.co/5kGdVg4/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

function App() {
  return (
    <div className="App">
      <h1><img id="logo" src="https://i.ibb.co/zhtG3mx/Logo.png" alt="Logo of hunger of what"/>Hunger of What?!</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  )
}

export default App;
