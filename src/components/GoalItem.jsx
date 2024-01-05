import React, { useState, useRef, useEffect } from 'react';
import Chip from './Chip';
import { FaArrowRight } from 'react-icons/fa'; // Import the continue/progress icon



const GoalItem = ({ goal, category, isSelected, onSelect, feedback, onCheckIn, onViewProgress, onViewCheckIns, isFeedbackVisible, handleFeedbackToggle }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const feedbackRef = useRef(null);

    const itemStyle = isSelected ? "border-2 border-gray-300 shadow-lg" : "border";


    useEffect(() => {
        if (feedbackRef.current) {
            const isOverflow = feedbackRef.current.scrollWidth > feedbackRef.current.clientWidth;
            setIsOverflowing(isOverflow);
        }
    }, [feedback, isFeedbackVisible, isExpanded]);

    const handleReadMore = () => {
        setIsExpanded(true);
    };

    return (
        <div className={`flex flex-col ${itemStyle} p-4 m-2 rounded-lg`} onClick={onSelect}>
                <div className="flex flex-col overflow-auto"> {/* Adjust this div */}
                    <input
                        type="text"
                        value={goal}
                        className="text-lg font-semibold truncate bg-transparent border-none"
                        disabled
                    />
                </div>

                <div className="flex justify-between items-center">
                    <Chip text={category} />
                    <button className='flex items-center justify-center w-fit mx-2 h-8 px-4 py-[7px] text-base font-medium text-black rounded-full transition-all duration-150 bg-white shadow-md' onClick={onCheckIn}>
                        <FaArrowRight /> {/* Continue/Progress Icon */}
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline mt-1" onClick={handleFeedbackToggle}>Feedback</button>
                    {isFeedbackVisible && (
                        <div className="mt-2 p-2 bg-gray-100 border rounded">
                            <p ref={feedbackRef} className={`overflow-y-auto ${isExpanded ? 'max-h-24' : 'truncate'}`}>{feedback ? feedback : <i className='text-sm'>No feedback yet.</i>}</p>
                            {isOverflowing && !isExpanded && <button className="text-blue-500 text-sm" onClick={handleReadMore}>Read more</button>}
                        </div>
                    )}
                </div>
            </div>
    );
};

export default GoalItem;
