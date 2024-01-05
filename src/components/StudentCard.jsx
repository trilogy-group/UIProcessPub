import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegCalendarAlt, FaChartLine, FaComments } from 'react-icons/fa';

const StudentCard = ({ id, name, imageSrc, email }) => {
  // Button styling
  const buttonClass =
    'flex items-center justify-center w-full m-2 px-8 py-4 text-base font-medium text-black rounded-full transition-all duration-150 bg-white shadow-md';

  return (
    <div className="max-w-xs mx-2 bg-white rounded-3xl shadow-lg overflow-hidden">
      <Link to={`/students/${id}`} className="block">
        <div className="p-4 text-center">
          <div className="inline-block rounded-full overflow-hidden border-4 border-white" style={{ width: '160px', height: '160px' }}>
            <img src={imageSrc} alt={name} className="object-cover w-full h-full" />
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-400">{email}</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-center items-center p-2">
        <NavLink
          to={"/mentor-meetings" }
          state={{ studentName: name }}
          className={buttonClass}
          aria-label="Meetings"
        >
          <FaRegCalendarAlt className="text-gray-600" />
        </NavLink>
        <NavLink to={`/students/${id}/progress`} className={buttonClass} aria-label="Progress">
          <FaChartLine className="text-gray-600" />
        </NavLink>
        <NavLink to={`/students/${id}/chat`} className={buttonClass} aria-label="Chat">
          <FaComments className="text-gray-600" />
        </NavLink>
      </div>
    </div>
  );
};

export default StudentCard;
