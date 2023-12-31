import React from 'react';
import GoalsList from '../components/GoalList';
import AddGoal from '../components/AddGoal';

const sampleGoals = [
    // Physical Goals
    { id: 1, goal: "Run 5km thrice a week", category: "Physical", feedback: "Great progress, consider increasing distance gradually." },
    { id: 2, goal: "Attend yoga class every Monday", category: "Physical", feedback: "" },
    { id: 3, goal: "Complete a monthly hiking challenge", category: "Physical", feedback: "Impressive endurance, try varying trails." },
    { id: 4, goal: "Drink 2 liters of water daily", category: "Physical", feedback: "Good hydration habits. Remember to maintain it. Good hydration habits. Remember to maintain it. Good hydration habits. Remember to maintain it. Good hydration habits. Remember to maintain it." },
  
    // Academic Goals
    { id: 5, goal: "Read one new book each month", category: "Academic", feedback: "Excellent choice of books, expand your genres." },
    { id: 6, goal: "Finish online coding course by June", category: "Academic", feedback: "On track. Focus on practical application of concepts." },
    { id: 7, goal: "Attend weekly study group sessions", category: "Academic", feedback: "Active participation noticed. Engage more in discussions." },
    { id: 8, goal: "Write a research paper this semester", category: "Academic", feedback: "Solid research question. Work on structuring your arguments." },
  
    // Emotional Goals
    { id: 9, goal: "Practice meditation daily", category: "Emotional", feedback: "Consistent practice is showing positive effects." },
    { id: 10, goal: "Journal for 15 minutes every night", category: "Emotional", feedback: "Journaling is a great self-reflection tool. Keep it up!" },
    { id: 11, goal: "Read self-help books", category: "Emotional", feedback: "Diverse reading is beneficial. Try incorporating learned techniques." },
    { id: 12, goal: "Engage in a new hobby", category: "Emotional", feedback: "Exploring new hobbies is enriching. Consider sharing your experiences." },
  
    // Social Goals
    { id: 13, goal: "Organize a monthly social gathering", category: "Social", feedback: "Your organizing skills are improving. Try diverse activities." },
    { id: 14, goal: "Volunteer twice a month", category: "Social", feedback: "Your commitment to volunteering is commendable." },
    { id: 15, goal: "Join a new club or group", category: "Social", feedback: "Great initiative. Engage actively for more benefits." },
    { id: 16, goal: "Call family members weekly", category: "Social", feedback: "Regular family contact is wonderful. Try video calls too." }
  ];
  


function StudentGoalsPage() {
    return (<div className='w-80 max-h-screen flex flex-col'>
        <AddGoal/>
        <GoalsList goals={sampleGoals}/>
    </div>
        
    );
}

export default StudentGoalsPage;

import React, { useState } from 'react';
import GoalItem from './GoalItem';

const GoalsList = ({ goals }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFeedbackId, setActiveFeedbackId] = useState(null);

    const handleFeedbackToggle = (id) => {
        if (activeFeedbackId === id) {
            setActiveFeedbackId(null);
        } else {
            setActiveFeedbackId(id);
        }
    };


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredGoals = goals.filter((goal) =>
        goal.goal.toLowerCase().includes(searchQuery)
    );

    return (
        <>
            <div className="flex p-4 items-center bg-white">
                <input
                    className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    type="search"
                    placeholder="Search Goals"
                    onChange={handleSearchChange}
                />
            </div>
            <div className="flex flex-col overflow-scroll">
                {filteredGoals.map((goal) => (
                    <GoalItem
                        key={goal.id}
                        {...goal}
                        isFeedbackVisible={activeFeedbackId === goal.id}
                        handleFeedbackToggle={() => handleFeedbackToggle(goal.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default GoalsList;

import React, { useState, useRef, useEffect } from 'react';
import Chip from './Chip';
import { FaCheckCircle, FaChartLine, FaHistory } from 'react-icons/fa'; // Import FontAwesome icons


const GoalItem = ({ goal, category, feedback, onCheckIn, onViewProgress, onViewCheckIns, isFeedbackVisible, handleFeedbackToggle }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const feedbackRef = useRef(null);

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
        <div className="flex flex-col border p-4 my-1 rounded-lg">
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
                <div className='flex flex-row'>
                    <button className='flex items-center justify-center w-fit mx-2 h-8 px-4 py-[7px] text-base font-medium text-black rounded-full transition-all duration-150 bg-white shadow-md' onClick={onCheckIn}>
                        <FaCheckCircle /> {/* Check In Icon */}
                    </button>
                    <button className='flex items-center justify-center w-fit mx-2 h-8 px-4 py-[7px] text-base font-medium text-black rounded-full transition-all duration-150 bg-white shadow-md' onClick={onCheckIn}>
                    <FaChartLine /> {/* View Progress Icon */}
                    </button>
                    <button className='flex items-center justify-center w-fit mx-2 h-8 px-4 py-[7px] text-base font-medium text-black rounded-full transition-all duration-150 bg-white shadow-md' onClick={onCheckIn}>
                        <FaHistory /> {/* Past Check-Ins Icon */}
                    </button>
                </div>
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

import React, { useState } from 'react';
import { FaSearchPlus } from 'react-icons/fa'; // Ensure you have react-icons installed
import { CiCirclePlus } from "react-icons/ci";

const AddGoal = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const categories = ['Academic', 'Physical', 'Emotional', 'Social'];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit logic here
        setIsFormVisible(false);
    };

    return (
        isFormVisible ? (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter goal" className="input" />
                <div>
                    {categories.map(category => (
                        <label key={category}>
                            <input type="radio" name="category" value={category} />
                            {category}
                        </label>
                    ))}
                </div>
                <button type="submit" className="btn">Submit</button>
                <button type="button" onClick={() => setIsFormVisible(false)} className="btn">Cancel</button>
            </form>
        ) : (
            <button onClick={() => setIsFormVisible(true)} className="btn bg-blue-500 w-full flex justify-center items-center text-white rounded-xl py-2 mt-2 m">
                New Goal <CiCirclePlus className="ml-2" style={{ fontSize: '1.5em' }} />
            </button>
        )
    );
};

export default AddGoal;


