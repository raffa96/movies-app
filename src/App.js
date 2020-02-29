import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import "./App.css";

const API_URL = "http://www.omdbapi.com";

const API_KEY = "a2f6a678";

async function fetchMovie(search) {
  const response = await fetch(API_URL + "?apikey=" + API_KEY + "&s=" + search);

  return response.json();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      totalCount: 0
    };
  }

  searchMovie = query => {
    if (!query) {
      return;
    }

    fetchMovie(query).then(result => {
      this.setState({ movie: result.Search, totalCount: result.totalResults });
    });
  };

  componentDidMount() {
    this.searchMovie("back to the future");
  }

  render() {
    return (
      <div id="app">
        <Navbar onSearchMovie={this.searchMovie} />

        <div className="header">
          <h1 className="text-center">Welcome to MyMovie App!</h1>
        </div>

        <div className="container-fluid">
          <MovieList movie={this.state.movie} />
        </div>
      </div>
    );
  }
}

export default App;
