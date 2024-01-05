import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import Portal from '../components/Portal';
import { motion, AnimatePresence } from 'framer-motion';
import AddMeetingModal from '../components/AddMeetingModal';
import MeetingModal from '../components/MeetingModal';
import { useMeetings } from '../contexts/MeetingsContext';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';



const MentorMeetingsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [mousePosition, setMousePosition] = useState(0);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const { meetings, handleAddMeeting } = useMeetings();
    const location = useLocation();
    const [prefilledStudentName, setPrefilledStudentName] = useState('');


    useEffect(() => {
        if (location.state?.studentName) {
            setPrefilledStudentName(location.state.studentName);
        }
    }, [location.state]);

    const renderDayHeader = (headerInfo) => {
        const view = headerInfo.view.type;
        const date = headerInfo.date;
    
        if (view === 'dayGridMonth') {
          // Format for dayGridMonth view: Only weekday
          return <span>{format(date, 'EEEE')}</span>;
        } else if (view === 'timeGridWeek') {
          // Format for timeGridWeek view: Weekday on top of the date
          return (
            <div>
              <div>{format(date, 'EEEE')}</div>
              <div>{format(date, 'd')}</div>
            </div>
          );
        }
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
                        timeZone='local'
                        locale={'en'}
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
                        firstDay={0}
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
                            prefilledStudentName={prefilledStudentName} // Pass the prefilled name
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