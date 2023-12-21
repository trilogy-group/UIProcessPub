import React, { useState } from 'react';
import Calendar from '../components/Calendar';

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

const StudentCard = ({ name, imageSrc }) => (
    <div className="bg-white p-4 rounded-3xl shadow">
      <div className="flex justify-start">
        <img src={imageSrc} alt={name} className="w-32 h-32 rounded-3xl mr-4" />
        <div>
          <h2 className="font-bold">{name}</h2>
          <p>More details here...</p>
        </div>
      </div>
    </div>
  );

const MentorHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const students = [
    { name: 'John Doe', imageSrc: 'https://static.livebooks.com/a3bda11fe04d4e2b91a0c0e497555041/i/f202266b6c23445da9eb412b7a9106e4/1/4SoifmQp7LJ6yDtMuFY2x/kids_headshots_Atlanta_marietta.jpg' },
    { name: 'Jane Smith', imageSrc: 'https://images.squarespace-cdn.com/content/v1/555bd2ece4b00127a2b1264f/1620704048811-1CYPTG3HKGVWIEER1AEJ/1_kids_acting_headshot_for_rayna_by_michael_verity_photography.jpg?format=750w' },
    { name: 'Alice Johnson', imageSrc: 'https://images.squarespace-cdn.com/content/v1/5c4d7e227e3c3a6ec70a5ac7/749442e8-9f2a-423f-abf8-6dacbb512156/Child+Actors+Headshots+Los+Angeles%2CLondon%2C+New+York.+%28RORY+LEWIS+Photographer%29'},
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col bg-white">
        <Header onSearchChange={handleSearchChange} />
        <main className="p-4 overflow-auto">
          <div className="grid grid-cols-3 gap-4">
            {filteredStudents.map((student) => (
              <StudentCard key={student.name} name={student.name} imageSrc={student.imageSrc} />
            ))}
          </div>
        </main>
      </div>
      <aside className="w-80 border border-gray-300">
        <Calendar />
      </aside>
    </div>
  );
};

export default MentorHomePage;
