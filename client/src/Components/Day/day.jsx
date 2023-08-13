import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function StoreWeekdaysCalendar() {
  const [selectedRange, setSelectedRange] = useState([]);
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);

  const handleDateChange = (date) => {
    setSelectedRange(date);
    const weekdays = getSelectedWeekdays(date);
    setSelectedWeekdays(weekdays);
  };

  const getSelectedWeekdays = (dates) => {
    const selectedDates = [];
    const currentDate = new Date(dates[0]);
    const endDate = new Date(dates[1]);

    while (currentDate <= endDate) {
      if ([1, 2, 3].includes(currentDate.getDay())) {
        selectedDates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return selectedDates;
  };

  const storeSelectedWeekdays = () => {
    // Now you can send the selectedWeekdays array to your backend for storage
    console.log('Selected Weekdays:', selectedWeekdays);
  };

  return (
    <div>
      <Calendar
        selectRange
        onChange={handleDateChange}
        value={selectedRange}
      />
      {selectedWeekdays.length > 0 && (
        <div>
          <h2>Selected Weekdays:</h2>
          <ul>
            {selectedWeekdays.map((weekday, index) => (
              <li key={index}>{weekday.toDateString()}</li>
            ))}
          </ul>
          <button onClick={storeSelectedWeekdays}>Store Selected Weekdays</button>
        </div>
      )}
    </div>
  );
}

export default StoreWeekdaysCalendar;

