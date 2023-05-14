import './Calendar.css'

function Calendar() {
  const daysInMonth = 31; // Total number of days in the month
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1); // Array of day numbers

  const handleDayClick = (day) => {
    console.log(`Clicked on day ${day}`);
    // You can perform any action here based on the clicked day
  };

  const getCalendarRows = () => {
    const rows = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    const weekDaysRow = weekDays.map((day, index) => (
      <div key={index} className="calendar__day">{day}</div>
    ));

    rows.push(
      <div key={-1} className="calendar__row">
        {weekDaysRow}
      </div>
    );


    for (let i = 0; i < days.length; i += 7) {

      const daysRow = days.slice(i, i + 7).map((day) => (
        <button key={day} className="calendar__button" onClick={() => handleDayClick(day)}>
          {day}
        </button>
      ));

      rows.push(
        <div key={i} className="calendar__row">
          {daysRow}
        </div>
      );

    }

    return rows;
  };

  return <div className="calendar">{getCalendarRows()}</div>;
}

export default Calendar;
