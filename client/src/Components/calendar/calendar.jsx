import React, { useState } from 'react';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default calendar styles
import './Calendar.css'; // You can create your own custom styles if needed


function MyCalendar() {
  const [selectedDates, setSelectedDates] = useState([new Date(),new Date()]);

  
  const handleDateChange = (dates) => {
    setSelectedDates(dates);

  };

  return (
  <>
    <div className="calendar-container">
      <h2>My Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        selectRange={true}
        value={selectedDates}
        />
      <p>Selected Date: {selectedDates[0].toLocaleDateString()}-{selectedDates[1].toLocaleDateString()}</p>
    </div>
        </>
    
  );
}

export default MyCalendar;
