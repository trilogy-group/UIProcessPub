import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddMeetingModal = ({ selectedDate, onClose, onAddMeeting, mousePosition }) => {
    const [meetingDetails, setMeetingDetails] = useState({
        start: selectedDate.start,
        end: selectedDate.end,
    });

    const [isAllDay, setIsAllDay] = useState(selectedDate.allDay);

    console.log(Math.abs(selectedDate.start - selectedDate.end));
    if ((Math.abs(selectedDate.start - selectedDate.end) == 86400000) && ((selectedDate.start.getHours() == 0) && (selectedDate.start.getMinutes() == 0) && (selectedDate.end.getHours() == 0) && (selectedDate.end.getMinutes() == 0))) {
        selectedDate.end = selectedDate.start;
        selectedDate.endStr = selectedDate.startStr;
    }

    const handleChange = (e) => {
        setMeetingDetails({ ...meetingDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMeeting(meetingDetails);
        onClose();
    };

    const handleAllDayChange = (e) => {
        setIsAllDay(e.target.checked);
        selectedDate.allDay = e.target.checked;
    };

    const { innerWidth: width, innerHeight: height } = window;
    // Modal animation variants
    const modalVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            x: 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        }
    };

    return (
        <Portal>
            <motion.div

                className="fixed inset-0 z-10 flex justify-center items-center items-center"
                onClick={onClose}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <motion.div
                    layout
                    className="bg-white p-4 rounded-lg"
                    style={{ boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.5)' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Form for meeting details */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <input
                                type="text"
                                name="title"
                                placeholder="Meeting Title"
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-200 focus:outline-none focus:border-dodger-blue"
                                required={true}
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="allDayCheckbox"
                                checked={isAllDay}
                                onChange={handleAllDayChange}
                                className="mr-2"
                            />
                            <label htmlFor="allDayCheckbox">All Day</label>
                        </div>


                        <motion.div

                            className="flex flex-row"
                        >
                            <motion.input
                                type="date"
                                name="startDate"
                                defaultValue={selectedDate.startStr.slice(0, 10)}
                                onChange={handleChange}
                                className="bg-transparent border-0 focus:outline-none"
                                required={true}
                            />
                            <AnimatePresence mode="wait">
                                {!isAllDay && (<motion.input
                                    key="firstTimeInput"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    type="time"
                                    name="startTime"
                                    defaultValue={selectedDate.start.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 focus:outline-none"
                                    required={true}
                                />)}
                            </AnimatePresence>
                            {selectedDate.startStr !== selectedDate.endStr && (
                                <input
                                    type="date"
                                    name="endDate"
                                    defaultValue={selectedDate.endStr.slice(0, 10)}
                                    onChange={handleChange}
                                    className="bg-transparent border-0 focus:outline-none"
                                    required={true}
                                />
                            )}
                            <AnimatePresence>
                                {!isAllDay && (<motion.input
                                    key="secondTimeInput"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    type="time"
                                    name="endTime"
                                    defaultValue={selectedDate.end.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 focus:outline-none"
                                    required={true}
                                />)}
                            </AnimatePresence>
                        </motion.div>

                        <div className="flex flex-col">
                            <input
                                type="text"
                                name="student"
                                placeholder="Student Attending"
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-dodger-blue focus:bg-light-grey focus:outline-none"
                                required={true}
                            />
                        </div>

                        <div className="flex flex-col">
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-dodger-blue focus:bg-light-grey focus:outline-none"
                                required={true}
                            />
                        </div>

                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add Meeting</button>
                        <button onClick={onClose} className="px-4 py-2 mt-2 bg-gray-300 text-black rounded hover:bg-gray-400">Cancel</button>
                    </form>

                </motion.div>
            </motion.div>
        </Portal>

    );
};
export default AddMeetingModal;