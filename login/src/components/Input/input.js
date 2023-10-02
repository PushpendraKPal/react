import classes from "../Login/Login.module.css";

const Input = ({ isValid, label, type, id, value, onChange }) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={() => isValid}
      />
    </div>
  );
};

export default Input;
