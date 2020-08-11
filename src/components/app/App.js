import React from 'react';
import './App.css';
import BusinessList from '../businesslist/BusinessList';
import SearchBar from '../searchbar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1><img id="logo" src="https://i.ibb.co/zhtG3mx/Logo.png" alt="Logo of hunger of what"/>Hunger of What?!</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
