import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="row">
      {movie.map(({ imdbID, Title, Poster }) => (
        <div key={imdbID} className="col-sm-12 col-md-3">
          <MovieItem title={Title} img={Poster} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
