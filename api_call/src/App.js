import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Loading from "./components/Loading";
import Errors from "./components/Errors";
import InputForm from "./components/InputForm";

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newMovie, setNewMovie] = useState({
    title: "",
    releaseDate: "",
    details: "",
  });

  const getMoviesHandler = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    getMoviesHandler();
  }, [getMoviesHandler]);

  return (
    <div className="App">
      <InputForm setNewMovie={setNewMovie} />
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
