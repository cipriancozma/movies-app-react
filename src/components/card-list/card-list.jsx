import React from "react";
import "./card-list.css";
import Card from '../card/card';

const CardList = ({ movies }) => {
  return <div className="card-list">
       {
        movies.map(movie => {
         return <Card key={movie.id} movie={movie} />
        })
      }
  </div>;
};

export default CardList;
