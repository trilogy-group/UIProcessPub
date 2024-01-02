import { useState, useRef, useEffect } from 'react';

const CheckInFormModal = ({ onClose, onSubmit }) => {
    // State to store the input values
    const [goal, setGoal] = useState('');
    const [score, setScore] = useState('');
    const [reasoning, setReasoning] = useState('');
    const radioButtonSectionRef = useRef(null);
    const [minWidth, setMinWidth] = useState(0);

    useEffect(() => {
        if (radioButtonSectionRef.current) {
            const width = radioButtonSectionRef.current.offsetWidth * 10.5;
            setMinWidth(width / 0.8); // Set minimum width based on the element's width
            console.log(width / 0.8);
        }
    }, []);

    // Handle the submission of the form
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ goal, score, reasoning });
        onClose(); // Close the modal after submission
    };

    const getEmojiForScore = (score) => {
        const emojiMap = {
            1: '😡', // Angry emoji for score 1
            2: '😠', // Angry emoji for score 2
            3: '😦', // Frowning emoji for score 3
            4: '😧', // Anguished emoji for score 4
            5: '😐', // Neutral emoji for score 5
            6: '🙂', // Slightly smiling emoji for score 6
            7: '😊', // Smiling emoji with smiling eyes for score 7
            8: '😁', // Beaming emoji with smiling eyes for score 8
            9: '😄', // Smiling emoji with open mouth for score 9
            10: '😍' // Heart-eyes emoji for score 10
        };

        return emojiMap[score];
    };

    const getColorForScore = (score) => {
        const colorMap = {
            1: '#D2222D', // Very red
            2: '#FF4136', // Mostly red with some orange
            3: '#FF851B', // Mostly orange with very little red
            4: '#FFA500', // Orange
            5: '#FFD700', // Gold or orange yellow
            6: '#FFFF00', // Yellow
            7: '#ADFF2F', // Lime green
            8: '#2ECC40', // Light green
            9: '#00B050', // Emerald
            10: '#008000', // Very green (less dark than before)
        };

        return colorMap[score];
    };



    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="z-10 bg-white p-4 rounded-xl flex flex-col items-center min-w-[400px]" style={{ minWidth: `${minWidth}px` }}>
                <h2 className="text-xl mb-2">Goal Check-In</h2>
                <form onSubmit={handleFormSubmit} className='w-4/5'>
                    <input
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="Your Goal"
                        className="p-2 border rounded w-full"
                    />
                    <div className="flex justify-center my-2">
                        {Array.from({ length: 10 }, (_, index) => index + 1).map((number) => (
                            <div ref={radioButtonSectionRef} key={number} className="flex flex-col items-center cursor-pointer my-2">
                                <label className="emoji-label">
                                    <input
                                        type="radio"
                                        name="score"
                                        value={number}
                                        checked={score === `${number}`}
                                        onChange={(e) => setScore(e.target.value)}
                                        className="sr-only items-center"
                                        style={{
                                            accentColor: getColorForScore(number) // This will color the radio button
                                        }}
                                    />
                                    <div
                                        className={`flex flex-col emoji-bg p-2 my-1 rounded-full transition-all ${score === `${number}` ? 'border-2' : 'border'}`}
                                        style={{
                                            borderColor: score === `${number}` ? getColorForScore(number) : 'transparent', // Apply the border color or make it transparent
                                            borderWidth: '2px' // Ensure the border width is the same in both states
                                        }}
                                    >
                                        {getEmojiForScore(number)}
                                        <span className="text-sm text-center">{number}</span> {/* Label for the score */}
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>


                    <textarea
                        value={reasoning}
                        onChange={(e) => setReasoning(e.target.value)}
                        placeholder="Reasoning for the score"
                        className="w-full p-2 border border-gray-300 rounded h-28 overflow-auto rounded" // sets height to 4 lines and allows scrolling
                    />
                    <div className="flex w-full justify-between space-x-12 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn bg-gray-200 text-black border border-gray-400 w-1/2 rounded-3xl h-10 hover:bg-gray-300 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn bg-blue-500 text-white w-1/2 rounded-3xl h-10 hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CheckInFormModal;