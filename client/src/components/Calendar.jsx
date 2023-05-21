import './Calendar.css'

function Calendar(props) {
  const daysInMonth = 31; // Total number of days in the month
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1); // Array of day numbers

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


    for (let i = 1; i <= days.length; i += 7) {
      const daysRow = [];
      for (let j=i; j<i+7 && j<=daysInMonth; j++) {
      
        const button = <button key={j} className="calendar__button" onClick={(event) => {
          event.preventDefault();
          //https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
          /* eslint-disable react/prop-types */
          props.onChangeDay(j);
          }
        }>
          {j}
        </button>
        daysRow.push(button)
      }

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
