import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserCard from './UserCard';

// Individual button component using NavLink
const NavButton = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-left w-full px-4 py-2 text-sm font-medium text-black rounded-full transition-all duration-150 ${
        isActive ? 'bg-white shadow-md' : 'hover:bg-gray-100'
      }`}
  >
    {children}
  </NavLink>
);

// Navigation menu component
const NavigationMenu = ({ userRole, onSignOut }) => {
  const navigate = useNavigate();

  const menuItems = userRole === 'mentor'
    ? [
        { name: 'Mentor Home', path: '/mentor-home' },
        { name: "Mentor's Students", path: '/mentor-students' },
        // Add other mentor specific items here
      ]
    : [
        { name: 'Student Home', path: '/student-home' },
        { name: "Student's Goals", path: '/student-goals' },
        { name: "Student's Progress", path: '/student-progress' },
        // Add other student specific items here
      ];

  const handleLogOut = () => {
    // onSignOut();
    navigate('/sign-in');
  };

  return (
    <div className="flex h-screen">
      {/* Navigation sidebar */}
      <nav className="flex flex-col w-64 h-full bg-gray-200 p-4 rounded-lg shadow-inner overflow-auto">
        <UserCard/>
        {menuItems.map((item) => (
          <NavButton key={item.name} to={item.path}>
            {item.name}
          </NavButton>
        ))}
        {/* Spacer to push the line and button to the bottom */}
        <div className="mt-auto">
          <hr className="border-gray-300" /> {/* Horizontal break */}
          <button 
            onClick={handleLogOut} 
            className="text-left w-full px-4 py-2 text-sm font-medium text-black rounded-full transition-all duration-150 hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      </nav>

      {/* Content area */}
      <div className="flex-1 overflow-auto">
        {/* Content related to the selected navigation item */}
      </div>
    </div>
  );
};

export default NavigationMenu;
