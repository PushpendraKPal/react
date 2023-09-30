import "./Overlay.css";

const Overly = (props) => {
  return (
    <div className="overlay_container">
      <div className="text_container">
        <p>{props.text}</p>
        <button className="overlay_btn" onClick={() => props.setOverlay(false)}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Overly;
