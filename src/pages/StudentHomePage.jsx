import React from 'react';
import Calendar from '../components/Calendar';
import NotificationList from '../components/NotificationList';

function StudentHomePage() {
    return (
        <div className="flex max-h-screen bg-white">
          <div className="flex-1 flex flex-col bg-white">
            <main className="p-4 overflow-auto">
              
            </main>
          </div>
          <aside className="w-80 border border-gray-300 max-h-screen flex flex-col">
            <Calendar />
            <NotificationList />
          </aside>
        </div>
      );
    };

export default StudentHomePage;