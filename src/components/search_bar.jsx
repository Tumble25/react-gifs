import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (e) => {
    this.props.searchFunction(e.target.value);
  }
  render(){
    return (
      <input type="text" className="form-search form-control"
      onChange={this.handleUpdate}/>
      )
  }
}

export default SearchBar;

