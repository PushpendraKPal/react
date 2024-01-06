import { useState } from "react";

const InputForm = ({ setNewMovie }) => {
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewMovie((prev) => {
      return {
        title,
        releaseDate: release,
        details,
      };
    });
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
