import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import NotificationList from '../components/NotificationList';
import StudentCard from '../components/StudentCard';

const Header = ({ onSearchChange }) => (
  <div className="flex items-center justify-between p-4 shadow-md bg-white">
    <h1 className="text-xl font-bold">My Students</h1>
    <div className="flex border rounded-full overflow-hidden shadow">
      <input
        className="px-4 py-2 rounded-full"
        type="search"
        placeholder="Search"
        onChange={onSearchChange}
      />
    </div>
  </div>
);

const MentorHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const students = [
    { id: '1', name: 'John Doe', imageSrc: 'https://static.livebooks.com/a3bda11fe04d4e2b91a0c0e497555041/i/f202266b6c23445da9eb412b7a9106e4/1/4SoifmQp7LJ6yDtMuFY2x/kids_headshots_Atlanta_marietta.jpg' },
    { id: '2', name: 'Jane Smith', imageSrc: 'https://images.squarespace-cdn.com/content/v1/555bd2ece4b00127a2b1264f/1620704048811-1CYPTG3HKGVWIEER1AEJ/1_kids_acting_headshot_for_rayna_by_michael_verity_photography.jpg?format=750w' },
    { id: '3', name: 'Alice Johnson', imageSrc: 'https://images.squarespace-cdn.com/content/v1/5c4d7e227e3c3a6ec70a5ac7/749442e8-9f2a-423f-abf8-6dacbb512156/Child+Actors+Headshots+Los+Angeles%2CLondon%2C+New+York.+%28RORY+LEWIS+Photographer%29' },
  ];


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="flex max-h-screen bg-white">
      <div className="flex-1 flex flex-col bg-white">
        <Header onSearchChange={handleSearchChange} />
        <main className="p-4 overflow-auto">
          <div className="flex flex-wrap justify-start gap-4">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} id={student.id} name={student.name} imageSrc={student.imageSrc} />
            ))}
          </div>
        </main>
      </div>
      <aside className="w-80 border border-gray-300 max-h-screen flex flex-col">
        <Calendar />
        <NotificationList />
      </aside>
    </div>
  );
};

export default MentorHomePage;
