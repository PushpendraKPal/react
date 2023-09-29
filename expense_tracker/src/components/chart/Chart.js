import ChartBar from "./ChartBar";
import "./chart.css";

const Chart = (props) => {
  let { filteredData } = props;

  let chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  filteredData = filteredData.map((e) => {
    let m = new Date(e.date).getMonth();
    chartData[m].value += +e.amount;
  });

  let max = 0;
  for (let i = 0; i < chartData.length; i++) {
    if (chartData[i].value > max) max = chartData[i].value;
  }

  return (
    <div className="bar_container">
      {chartData.map((ele) => {
        //console.log(ele.label);
        return (
          <ChartBar
            label={ele.label}
            value={ele.value}
            max={max}
            key={ele.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
