const Button = ({ btnTxt, handleClick }) => {
  return (
    <button onClick={handleClick} className="btn">
      {btnTxt}
    </button>
  );
};

export default Button;
