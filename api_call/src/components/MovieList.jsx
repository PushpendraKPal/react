import "../App.css";

const MovieList = ({ films }) => {
  return (
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
  );
};

export default MovieList;
