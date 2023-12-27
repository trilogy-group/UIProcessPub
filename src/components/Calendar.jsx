import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';
import { useNavigate } from 'react-router-dom'; // Make sure you're using v6 of react-router-dom

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate(); // Hook for navigation in React Router v6

  const handleDateClick = (value, event) => {
    // Navigate to the mentor-meetings page with the selected date as state
    navigate('/mentor-meetings', { state: { selectedDate: value } });
  };

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: 'short' })[0];
  };

  return (
    <div className="sticky top-0 h-screen flex flex-col bg-white p-4 rounded-lg overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Calendar</h2>
      <Calendar
        onChange={onChange}
        onClickDay={handleDateClick}
        value={value}
        formatShortWeekday={formatShortWeekday}
      />
    </div>
  );
};

export default CalendarComponent;
