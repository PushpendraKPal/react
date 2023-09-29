const ExpenseFilter = (props) => {
  const handleChange = (e) => {
    props.setFilVal(e.target.value);
  };
  return (
    <div>
      <select value={props.filterVal} onChange={handleChange}>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
