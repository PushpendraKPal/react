import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getMoviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const movies = data.results.map((e) => {
      return {
        id: e.episode_id,
        title: e.title,
        details: e.opening_crawl,
        releaseDate: e.release_date,
      };
    });
    setFilms(movies);
    setIsLoading(false);
    //console.log(movies);
  }

  return (
    <div className="App">
      <div>
        <button className="btn" onClick={getMoviesHandler}>
          Get Movies
        </button>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {films.map((e) => {
            return (
              <div className="film_card" key={e.id}>
                <h2>{e.title}</h2>
                <h3>Realesed: {e.releaseDate}</h3>
                <p className="text">{e.details}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
