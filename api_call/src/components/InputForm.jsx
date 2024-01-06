import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ setNewMovie }) => {
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [details, setDetails] = useState("");
  let id;

  const addMovie = useCallback(async () => {
    const response = await fetch(
      "https://ecom-app-4e9ce-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify({
          id,
          title,
          releaseDate: release,
          details,
        }),
        headers: {
          headers: {
            "Content-Type": "application/json",
          },
        },
      }
    );

    setNewMovie((prev) => {
      return {
        id,
        title,
        releaseDate: release,
        details,
      };
    });

    //const data = await response.data.json();
    console.log(response);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    id = uuidv4();
    addMovie();
    setDetails("");
    setTitle("");
    setRelease("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Movie</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="release">Release</label>
        <input
          name="release"
          className="input"
          type="date"
          value={release}
          onChange={(e) => setRelease(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="details">Details</label>
        <textarea
          name="details"
          id=""
          cols="30"
          rows="10"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default InputForm;
