import "../App.css";

const MovieList = ({ films, setNewMovie }) => {
  const handleDelete = async (id) => {
    const response = await fetch(
      `https://ecom-app-4e9ce-default-rtdb.firebaseio.com/movies/${id}.json`,
      {
        method: "DELETE",
      }
    );
    setNewMovie((prev) => {
      return {
        id: "",
        title: "",
        releaseDate: "",
        details: "",
      };
    });
  };
  return (
    <div>
      {films.map((e) => {
        return (
          <div className="film_card" key={e.id}>
            <h2>{e.title}</h2>
            <h3>Realesed: {e.releaseDate}</h3>
            <p className="text">{e.details}</p>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
