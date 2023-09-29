import Chart from "./chart/Chart";

const ExpenseChart = (props) => {
  const { filteredData } = props;
  return <Chart filteredData={filteredData}></Chart>;
};

export default ExpenseChart;
