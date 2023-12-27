import React from 'react';
import { motion } from 'framer-motion';


const UserCard = () => {
  return (
    <motion.div
      className="flex cursor-pointer items-end bg-white shadow-lg rounded-3xl overflow-hidden p-2 mb-8"
      whileHover={{
        scale: 1.05, // Scales the card to 110% of its size
        transition: {
            type: "spring", // Use spring physics for the animation
            stiffness: 300, // Spring stiffness, adjust for more or less 'bounce'
            damping: 10, // Spring damping, adjust for more or less 'oscillation'
          },
        }}
    >
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
    </motion.div>
  );
};

export default UserCard;

