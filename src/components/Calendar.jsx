import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  // Function to format the weekday to show only the first letter
  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: 'short' })[0];
  };

  return (
<div className="sticky top-0 h-screen flex flex-col bg-white p-4 rounded-lg overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Calendar</h2>
      <Calendar
        onChange={onChange}
        value={value}
        formatShortWeekday={formatShortWeekday}
      />
    </div>
  );
};

export default CalendarComponent;
