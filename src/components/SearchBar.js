import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleSearchClick(event) {
    event.preventDefault();

    this.props.onSearchMovie(this.state.query);
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          value={this.state.query}
          onChange={event => this.handleQueryChange(event)}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={event => this.handleSearchClick(event)}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
