function ExpenseDate(props) {
  let { date } = props;
  function formatDate(inputDate) {
    const [year, month, day] = inputDate.split("-");
    const date = new Date(year, month - 1, day);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayOfWeek = day;
    const monthName = monthNames[date.getMonth()];
    const formattedYear = date.getFullYear();

    return {
      day: dayOfWeek,
      month: monthName,
      year: formattedYear,
    };
  }

  date = formatDate(date);

  return (
    <div>
      <div>{date.month}</div>
      <div className="day">{date.day}</div>
      <div>{date.year}</div>
    </div>
  );
}

export default ExpenseDate;
