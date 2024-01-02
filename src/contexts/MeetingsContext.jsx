// MeetingsContext.js
import React, { createContext, useState, useContext } from 'react';

const MeetingsContext = createContext();

export const useMeetings = () => useContext(MeetingsContext);

export const MeetingsProvider = ({ children }) => {
    const [meetings, setMeetings] = useState([
            { student: 'John Doe', location: 'Online', start: new Date("2024-01-17T03:24:00"), end: new Date("2024-01-17T07:24:00"), title: "Meeting with John Doe" },
            { student: 'Jane Smith', location: 'Online', start: new Date("2024-01-05T09:30:00"), end: new Date("2024-01-05T10:45:00"), title: "Meeting with Jane Smith" },
            { student: 'Alice Johnson', location: 'Online', start: new Date("2024-01-28T12:00:00"), end: new Date("2024-01-28T13:15:00"), title: "Meeting with Alice Johnson" },
    ]);

    const handleAddMeeting = (newMeeting) => {
        setMeetings((currentMeetings) => [...currentMeetings, newMeeting]);
    };

    return (
        <MeetingsContext.Provider value={{ meetings, handleAddMeeting }}>
            {children}
        </MeetingsContext.Provider>
    );
};
