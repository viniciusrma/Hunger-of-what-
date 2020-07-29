import React from 'react';
import './SearchBar.css';
import { render } from '@testing-library/react';

const sortByOptions = {
  BestMatch: "best_match",
  HighestRated: "rating",
  MostReviewed: "review_count"
};

class SearchBar extends React.Component {
  // Create dynamically the list items needed to display the sort options.
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key="sortByOptionValue" > {sortByOption} </li>;
    })
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            renderSortByOptions() {
              return Object.keys(sortByOptions).map(sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
                return <li key="sortByOptionValue"> {sortByOption} </li>;
              })
              }
            }
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
};

export default SearchBar;