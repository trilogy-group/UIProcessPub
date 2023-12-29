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
