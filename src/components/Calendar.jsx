import React, { useState }from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';
import { useNavigate } from 'react-router-dom';
import { useMeetings } from '../contexts/MeetingsContext'; // Adjust the import path as necessary

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const { meetings } = useMeetings();

  const handleDateClick = (value) => {
    navigate('/mentor-meetings', { state: { selectedDate: value } });
  };

  const tileContent = ({ date, view }) => {
    // Check if there are meetings on this date
    const dateMeetings = meetings.filter((meeting) => {
      const meetingDate = new Date(meeting.start).toDateString();
      return date.toDateString() === meetingDate;
    });

    if (view === 'month' && dateMeetings.length > 0) {
      return <div className="calendar-day-meeting-indicator"></div>;
    }
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Calendar</h2>
      <Calendar
        onChange={onChange}
        onClickDay={handleDateClick}
        value={value}
        tileContent={tileContent}
      />
    </div>
  );
};

export default CalendarComponent;
