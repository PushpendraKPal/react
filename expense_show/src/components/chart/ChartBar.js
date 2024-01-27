import "./chart.css";

const ChartBar = (props) => {
  const { label, max, value } = props;
  let valPercentage = Math.floor((value / max) * 100);
  console.log(valPercentage);

  return (
    <div className="bar">
      <div className="main_bar">
        <div className="filled_bar" style={{ height: valPercentage }}></div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default ChartBar;
