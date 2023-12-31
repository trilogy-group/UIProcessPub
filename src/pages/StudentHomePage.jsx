import React from 'react';
import Calendar from '../components/Calendar';
import NotificationList from '../components/NotificationList';
import GoalCard from '../components/GoalCard';

const sampleGoals = [
  {
    category: "Physical",
    lastScore: "9.4",
    overallTrend: "Positive",
    percentageChange: "+2.7%",
    latestFeedback: "Progress is steady. Stay consistent and focused."
  },
  {
    category: "Academic",
    lastScore: "6.9",
    overallTrend: "Negative",
    percentageChange: "0%",
    latestFeedback: "Progress is steady. Stay consistent and focused."
  },
  {
    category: "Emotional",
    lastScore: "8.9",
    overallTrend: "Positive",
    percentageChange: "+12.5%",
    latestFeedback: "You're doing fantastic! Keep up the good work."
  },
  {
    category: "Social",
    lastScore: "4.8",
    overallTrend: "Negative",
    percentageChange: "-11.4%",
    latestFeedback: "You're doing fantastic! Keep up the good work."
  }
];

function StudentHomePage() {
  return (
    <div className="flex max-h-screen bg-white">
      <div className="flex-1 flex flex-col bg-white">
        <main className= "m-auto p-4 grid grid-cols-1 lg:grid-cols-2 lg:h-screen overflow-scroll lg:overflow-hidden gap-6">
          {sampleGoals.map((goal, index) => (
            <GoalCard
              key={index}
              category={goal.category}
              lastScore={goal.lastScore}
              overallTrend={goal.overallTrend}
              percentageChange={goal.percentageChange}
              latestFeedback={goal.latestFeedback}
            />
          ))}
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