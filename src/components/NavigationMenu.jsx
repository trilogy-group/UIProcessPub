import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserCard from './UserCard';
import { useLocation } from 'react-router-dom';


// Individual button component using NavLink
const NavButton = ({ to, end, children }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `text-left w-full px-4 py-2 text-base font-medium text-black rounded-full transition-all duration-150 ${isActive ? 'bg-white shadow-md' : 'hover:bg-gray-100'
      }`}
  >
    {children}
  </NavLink>
);


const SectionHeader = ({ text }) => (
  <div className="flex items-center my-4">
    <div className="flex-1 border-t border-gray-300"></div>
    <span className="px-3 text-sm text-gray-500">{text}</span>
    <div className="flex-1 border-t border-gray-300"></div>
  </div>
);


// Navigation menu component
const NavigationMenu = ({ userRole, onSignOut }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isStudentRoute = location.pathname.startsWith('/students/');
  const baseStudentPath = location.pathname.split('/').slice(0, 3).join('/');


  const menuItems = userRole === 'mentor'
    ? [
      { name: 'Mentor Home', path: '/mentor-home' },
      { name: "Mentor's Meetings", path: '/mentor-meetings' },
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
        <UserCard />
        {menuItems.map((item) => (
          <NavButton key={item.name} to={item.path}>
            {item.name}
          </NavButton>
        ))}
        {isStudentRoute && (
          <>
            <SectionHeader text="Student Pages" />
            <NavButton to={`${baseStudentPath}`} end={true}>Home</NavButton>
            <NavButton to={`${baseStudentPath}/goals`} end={false}>Goals</NavButton>
            <NavButton to={`${baseStudentPath}/progress`} end={false}>Progress</NavButton>
          </>
        )}

        {/* Spacer to push the line and button to the bottom */}
        <div className="mt-auto">
          <hr className="border-gray-300" /> {/* Horizontal break */}
          <button
            onClick={handleLogOut}
            className="text-left w-full px-4 py-2 text-base font-medium text-black rounded-full transition-all duration-150 hover:bg-gray-100"
          ><i className="fa fa-sign-out sign-out-icon"></i>
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
