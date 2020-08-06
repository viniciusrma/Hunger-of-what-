import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  // Create dynamically the list items needed to display the sort options.
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      location:'',
      sortBy:'best_match'
    }

    this.sortByOptions = {
      'Best Match': "best_match",
      'Highest Rated': "rating",
      'Most Reviewed': "review_count"
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState( {sortBy : sortByOption} );
  }

  handleTermChange(event) {
    this.setState( {term: event.target.value} );
  }

  handleLocationChange(event) {
    this.setState( {term: event.target.value} );
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass} key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search for food or restaurants" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;