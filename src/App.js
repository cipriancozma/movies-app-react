import React, { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search/search";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/cipriancozma/movies-list/master/db.json"
    )
      .then((response) => response.json())
      .then((movies) => setMovies(movies.movies));
  }, []);

  // to display a message if we don't find movies
  // filter on genres
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <h2>Movies App</h2>
      <SearchBox
        placeholder="search movies"
        handleChange={(e) => setSearch(e.target.value)}
      />
      <CardList movies={filteredMovies} />
    </div>
  );
}

export default App;
