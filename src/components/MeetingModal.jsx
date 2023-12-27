import React, { useState } from 'react';
import Portal from '../components/Portal';
import { motion, AnimatePresence } from 'framer-motion';

const MeetingModal = ({ mousePosition, event, onClose, view }) => {

    function mid3(a, b, c) {

        // x is positive if a is greater than b. 
        // x is negative if b is greater than a. 
        let x = a - b;

        let y = b - c; // Similar to x 
        let z = a - c; // Similar to x and y. 

        // Checking if b is middle (x and y 
        // both are positive) 
        if (x * y > 0) return b;

        // Checking if c is middle (x and z 
        // both are positive) 
        else if (x * z > 0) return c;
        else return a;
    }

    const { innerWidth: width, innerHeight: height } = window;
    // Modal animation variants
    const modalCoordinateDestination = (mousePosition.left + mousePosition.width / 2) > width / 2 ? -(width / 2) + (mousePosition.left) - 234 : -(width / 2) + (mousePosition.left + mousePosition.width) + 234;
    let y;
    if (view == false) {
        const element = document.getElementsByClassName("fc-timegrid-divider fc-cell-shaded")[0];
        const rect = element.getBoundingClientRect();
        console.log(rect);
        const pos = rect.top + 94;
        y = -height / 2 + mid3(pos, mousePosition.top + 94, height - 110)
    }
    else {
        y = -height / 2 + Math.min(mousePosition.top + 94, height - 110)
    }
    const modalVariants = {
        hidden: { opacity: 0, y: y, x: (mousePosition.left + mousePosition.width / 2) > width / 2 ? modalCoordinateDestination + 100 : modalCoordinateDestination - 100 },
        visible: { opacity: 1, y: y, x: modalCoordinateDestination }
    };

    return (
        <Portal>
            <div className="fixed inset-0 z-10 flex justify-center items-center" onClick={onClose}></div>
            <motion.div
                className="fixed inset-0 z-10 flex justify-center items-center"
                onClick={onClose}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="bg-white p-4 rounded-lg"
                    style={{ boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.5)' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p>{`Time: ${event.start.toLocaleString()} - ${event.end.toLocaleString()}`}</p>
                    <p>{`Location: ${event.extendedProps.location}`}</p>
                    <p>{`Attendee: ${event.extendedProps.student}`}</p>
                    <button
                        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </Portal>
    );
};

export default MeetingModal;