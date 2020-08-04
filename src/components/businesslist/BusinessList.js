import React from 'react';
import './BusinessList.css';
import Business from '../app/App.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
      { this.props.businesses.map( (business) => <Business business={this.business} /> )} 
     </div>
    )
  }
};

export default BusinessList;