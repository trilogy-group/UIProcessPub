import React from 'react';

const UserCard = () => {
  return (
    <div className="flex items-end bg-white shadow-lg rounded-3xl overflow-hidden p-2 mb-8">
      {/* User image */}
      <img
        className="w-10 h-10 rounded-full mr-2"
        src="src/assets/investment-calculator-logo.png" // Replace with the path to your image
        alt="User"
      />
      {/* Email text */}
      <span className="text-xs font-medium text-gray-700 mb-1">
        john.doe@mentormate.com
      </span>
    </div>
  );
};

export default UserCard;
