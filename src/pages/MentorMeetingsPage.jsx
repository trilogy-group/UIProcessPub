import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import Portal from '../components/Portal';
import { motion, AnimatePresence } from 'framer-motion';
import AddMeetingModal from '../components/AddMeetingModal';
import MeetingModal from '../components/MeetingModal';

const Meetings = [
    { student: 'John Doe', location: 'Online', start: new Date("2023-12-17T03:24:00"), end: new Date("2023-12-17T07:24:00"), title: "Meeting with John Doe" },
    { student: 'Jane Smith', location: 'Online', start: new Date("2023-12-23T09:30:00"), end: new Date("2023-12-23T10:45:00"), title: "Meeting with Jane Smith" },
    { student: 'Alice Johnson', location: 'Online', start: new Date("2023-12-28T12:00:00"), end: new Date("2023-12-28T13:15:00"), title: "Meeting with Alice Johnson" },
];

const MentorMeetingsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [mousePosition, setMousePosition] = useState(0);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);


    const [meetings, setMeetings] = useState(Meetings);


    const handleAddMeeting = (newMeeting) => {
        // Logic to add the new meeting to your meetings state
        console.log(newMeeting);
        setMeetings((meetings) => [...meetings, {student: newMeeting.student, location: newMeeting.location, start: new Date(newMeeting.start), end: new Date(newMeeting.end), title: newMeeting.title}])
    };


    const renderDayHeader = (dateInfo) => {
        // Create a new date object from the dateInfo.date value
        const date = new Date(dateInfo.date);
        const options = { weekday: 'short', day: 'numeric' };
        const dateStr = new Intl.DateTimeFormat('en-US', options).format(date);

        const [weekday, day] = dateStr.split(' ');

        return (
            <div style={{ textAlign: 'center' }}>
                <div>{day}</div>
                <div>{weekday}</div>
            </div>
        );
    };


    const Header = () => (
        <div className="flex items-center justify-between p-4 shadow-md bg-white">
            <h1 className="text-xl font-bold">Meetings</h1>
        </div>
    );


    const handleRangeSelect = (selectInfo) => {
        const dimensions = selectInfo.jsEvent.target.getBoundingClientRect();

        const position = {
            top: dimensions.top,
            left: dimensions.left,
            width: dimensions.width,
            height: dimensions.height
        };
        setMousePosition(position);
        setSelectedDate(selectInfo);
        setIsAddModalOpen(true);
    };


    const handleEventClick = (clickInfo) => {
        const rect = clickInfo.el.getBoundingClientRect();
        const position = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height
        };
        setMousePosition(position);
        setSelectedEvent(clickInfo.event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };


    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex-1 flex flex-col bg-white">
                <Header />
                <main className="px-4 py-2 overflow-auto" style={{ height: 'calc(100vh - 60px)' }}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={meetings}
                        eventClick={handleEventClick}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek'
                        }}
                        dayHeaderContent={renderDayHeader}
                        eventContent={renderEventContent}
                        titleFormat={{ year: 'numeric', month: 'long' }} // Customize the title format
                        eventColor="DodgerBlue" // Set default event color
                        selectable={true}
                        select={handleRangeSelect}
                        height="100%"
                    />
                </main>
                <AnimatePresence>
                    {selectedEvent &&
                        <MeetingModal
                            mousePosition={mousePosition}
                            event={selectedEvent}
                            onClose={handleCloseModal}
                            view={document.getElementsByClassName("fc-dayGridMonth-button fc-button fc-button-primary")[0].classList.contains("fc-button-active")}
                        />}
                </AnimatePresence>
                <AnimatePresence>
                    {isAddModalOpen && (
                        <AddMeetingModal
                            selectedDate={selectedDate}
                            onClose={() => setIsAddModalOpen(false)}
                            onAddMeeting={handleAddMeeting}
                            mousePosition={mousePosition}
                        />
                    )}
                </AnimatePresence>


            </div>
            {/* <aside className="w-80 border border-gray-300 p-4">
                {selectedEvent && (
                    <div>
                        <h3 className="text-lg font-bold">{selectedEvent.title}</h3>
                        <p>{`Time: ${selectedEvent.start.toLocaleString()} - ${selectedEvent.end.toLocaleString()}`}</p>
                        <p>{`Location: ${selectedEvent.extendedProps.Where}`}</p>
                        <p>{`Attendee: ${selectedEvent.extendedProps.student}`}</p>
                    </div>
                )}
            </aside> */}
        </div>
    );
};

function renderEventContent(eventInfo) {
    const startTime = eventInfo.event.start.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const endTime = eventInfo.event.end.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const style = {
        backgroundColor: 'DodgerBlue',
        color: 'white',
        borderRadius: '4px',
        padding: '2px 4px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div style={style} className='flex flex-col'>
            <b>{eventInfo.event.title}</b>
            <i>{`${startTime} - ${endTime}`}</i>
        </div>
    );
}

export default MentorMeetingsPage;