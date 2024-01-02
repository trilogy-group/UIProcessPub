import React, { useState, useRef, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';

const AIChatWindow = () => {
    const [messages, setMessages] = useState([
        // Sample initial chat messages
        { id: 1, text: "Hello there!", sender: 'other' },
        { id: 2, text: "Hi! How can I help you today?", sender: 'user' },
        // Add more messages as needed...
    ]);
    const [newMessage, setNewMessage] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '56px'; // Initially set the height to inherit
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`; // Set the height equal to scrollHeight but not more than 200px
        }
    }, [newMessage]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'user' }]);
        setNewMessage('');
    };

    return (
        <div className="flex flex-col h-screen justify-between bg-stone-600">
            <div className="overflow-auto p-4 space-y-4 w-1/2 mx-auto">
                {messages.map((message) => (
                    <div key={message.id} className={`p-2 rounded shadow ${message.sender === 'user' ? 'ml-auto bg-blue-200' : 'mr-auto bg-white'}`}>
                        <div className="font-bold text-sm">{message.sender === 'user' ? 'You' : 'Other'}</div>
                        <div>{message.text}</div>
                    </div>
                ))}
            </div>
            <div className="p-4 mb-4 w-full max-w-[750px] mx-auto">
                <form onSubmit={handleSend} className="relative flex items-center">
                    <textarea
                        ref={textareaRef}
                        className="text-white px-12 py-[14px] flex-grow border border-gray-300 rounded-xl focus:outline-none focus:ring-0 focus:border-white bg-transparent resize-none overflow-scroll"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        rows={1}
                    />
                    <button
                        type="submit"
                        className="absolute right-0 bottom-0 rounded-lg bg-white p-1.5 m-3"
                    >
                        <MdArrowUpward className="text-xl text-black" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AIChatWindow;
