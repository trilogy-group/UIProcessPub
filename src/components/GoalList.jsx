import React, { useState } from 'react';
import GoalItem from './GoalItem';
import { MdSort, MdFilterList } from 'react-icons/md';
import Chip from './Chip';

const GoalsList = ({ goals }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFeedbackId, setActiveFeedbackId] = useState(null);
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [sortType, setSortType] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);


    const handleFeedbackToggle = (id) => {
        if (activeFeedbackId === id) {
            setActiveFeedbackId(null);
        } else {
            setActiveFeedbackId(id);
        }
    };

    const toggleSortOptions = () => {
        setShowSortOptions(!showSortOptions);
        setShowFilterOptions(false); // Close the filter dropdown when toggling the sort options
    };

    const toggleFilterOptions = () => {
        setShowFilterOptions(!showFilterOptions);
        setShowSortOptions(false); // Close the sort dropdown when toggling the filter options
    };

    const handleSort = (type) => {
        setSortType(type);
        setShowSortOptions(false); // Close the dropdown after sorting
    };

    const toggleCategoryFilter = (category) => {
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(category)) {
                // If the category is already selected, remove it from the array
                return prevSelectedCategories.filter(c => c !== category);
            } else {
                // If the category is not selected, add it to the array
                return [...prevSelectedCategories, category];
            }
        });
    };


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredGoals = goals
        .filter((goal) => {
            // Filter by categories if any filters are selected
            return selectedCategories.length > 0 ? selectedCategories.includes(goal.category) : true;
        })
        .filter((goal) => {
            // Filter by search query
            return goal.goal.toLowerCase().includes(searchQuery);
        })
        .sort((a, b) => {
            if (sortType === 'dateAsc') {
              return new Date(a.createdDate) - new Date(b.createdDate);
            } else if (sortType === 'dateDesc') {
              return new Date(b.createdDate) - new Date(a.createdDate);
            } else if (sortType === 'alphaAsc') {
              return a.goal.localeCompare(b.goal);
            } else if (sortType === 'alphaDesc') {
              return b.goal.localeCompare(a.goal);
            }
            return 0;
          });

    const categories = ['Physical', 'Academic', 'Emotional', 'Social'];


    return (
        <>
            <div className="flex p-4 items-center bg-white">
                <input
                    className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    type="search"
                    placeholder="Search Goals"
                    onChange={handleSearchChange}
                />

                <div className="relative inline-block"> {/* Wrap the filter icon and dropdown */}
                    <button onClick={toggleSortOptions} className="p-2">
                        <MdSort />
                    </button>
                    {showSortOptions && (
                        <div className="absolute right-0 p-2 bg-white border rounded shadow z-10">
                            <div className="flex flex-col items-start space-y-2"> {/* Flex container for vertical column aligned to the left */}                            <button onClick={() => handleSort('dateAsc')}>Date Ascending</button>
                                <button onClick={() => handleSort('dateDesc')}>Date Descending</button>
                                <button onClick={() => handleSort('alphaAsc')}>Alphabetical Ascending</button>
                                <button onClick={() => handleSort('alphaDesc')}>Alphabetical Descending</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative inline-block"> {/* Wrap the filter icon and dropdown */}
                    <button onClick={toggleFilterOptions} className="p-2 ml-2">
                        <MdFilterList />
                    </button>
                    {showFilterOptions && (
                        <div className="absolute right-0 mt-2 p-2 bg-white border rounded shadow z-10">
                            <div className="flex flex-col items-end space-y-2"> {/* Flex container for vertical column aligned to the right */}
                                {categories.map((category) => (
                                    <Chip
                                        key={category}
                                        text={category}
                                        style={selectedCategories.includes(category) ? '' : 'outlined'}
                                        additionalStyles="mx-1 my-1 cursor-pointer"
                                        onClick={() => toggleCategoryFilter(category)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
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
