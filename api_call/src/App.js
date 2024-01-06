import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Loading from "./components/Loading";
import Errors from "./components/Errors";

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getMoviesHandler() {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong... Retrying");
      }
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
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }

  return (
    <div className="App">
      <div>
        <button className="btn" onClick={getMoviesHandler}>
          Get Movies
        </button>
      </div>
      {!isLoading && !error && <MovieList films={films} />}
      {isLoading && !error && <Loading />}
      {!isLoading && error && (
        <Errors
          err={error}
          getMoviesHandler={getMoviesHandler}
          setError={setError}
        />
      )}
    </div>
  );
}

export default App;
