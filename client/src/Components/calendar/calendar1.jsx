import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

function Calendar1() {
  const [selectedDates, setSelectedDates] = useState([]);

  const startDate = new Date('');
  const endDate = new Date('');
  
  const storeWeekdays = (start, end, weekdays) => {
    const storedDates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      if (weekdays.includes(currentDate.getDay())) {
        storedDates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return storedDates;
  };

  const weekdaysToStore = [1, 2, 3]; // 0=Sunday, 1=Monday, 2=Tuesday, ...
  const storedWeekdays = storeWeekdays(startDate, endDate, weekdaysToStore);

  const handleDateChange = (date) => {
    setSelectedDates([...selectedDates, date]);
  };

  return (
    <div className="App">
      <h1>Weekday Date Storage using React Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDates}
        tileDisabled={({ date }) => date < startDate || date > endDate}
      />
      <ul>
        {selectedDates.map((date) => (
          <li key={date.toISOString()}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar1;
