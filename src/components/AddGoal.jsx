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
