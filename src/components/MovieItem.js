import React from "react";

function MovieItem({ title, img }) {
  return (
    <div className="card my-3">
      <img src={img} className="card-img-top" alt="Movie Poster" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <button className="btn btn-primary">Read More...</button>
      </div>
    </div>
  );
}

export default MovieItem;
