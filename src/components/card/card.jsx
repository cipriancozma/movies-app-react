import React from "react";
import './card.css';

const Card = ({ movie }) => {
  return (
    <div className="card-container">
        <img className="card-image" alt="movie" src={movie.posterUrl} />
        <h2 className="card-info">{movie.title}</h2>
        <h4 className="card-info"> Year: {movie.year}</h4>
        <h5 className="card-info">Runtime: {movie.runtime} min</h5>
    </div>
  );
};

export default Card;
