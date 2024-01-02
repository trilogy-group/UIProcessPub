import React from 'react';
import GoalsList from '../components/GoalList';


const sampleGoals = [
    { id: 1, goal: "Run 5km thrice a week", category: "Physical", feedback: "Great progress, consider increasing distance gradually.", createdDate: "2023-11-20" },
    { id: 2, goal: "Attend yoga class every Monday", category: "Physical", feedback: "Consistency is key. Keep it up!", createdDate: "2023-11-15" },
    { id: 3, goal: "Complete a monthly hiking challenge", category: "Physical", feedback: "Impressive endurance, try varying trails.", createdDate: "2023-10-25" },
    { id: 4, goal: "Drink 2 liters of water daily", category: "Physical", feedback: "Good hydration habits. Remember to maintain it.", createdDate: "2023-10-05" },
    { id: 5, goal: "Read one new book each month", category: "Academic", feedback: "Excellent choice of books, expand your genres.", createdDate: "2023-09-19" },
    { id: 6, goal: "Finish online coding course by June", category: "Academic", feedback: "On track. Focus on practical application of concepts.", createdDate: "2023-09-10" },
    { id: 7, goal: "Attend weekly study group sessions", category: "Academic", feedback: "Active participation noticed. Engage more in discussions.", createdDate: "2023-08-22" },
    { id: 8, goal: "Write a research paper this semester", category: "Academic", feedback: "Solid research question. Work on structuring your arguments.", createdDate: "2023-08-14" },
    { id: 9, goal: "Practice meditation daily", category: "Emotional", feedback: "Consistent practice is showing positive effects.", createdDate: "2023-11-04" },
    { id: 10, goal: "Journal for 15 minutes every night", category: "Emotional", feedback: "Journaling is a great self-reflection tool. Keep it up!", createdDate: "2023-10-31" },
    { id: 11, goal: "Read self-help books", category: "Emotional", feedback: "Diverse reading is beneficial. Try incorporating learned techniques.", createdDate: "2023-10-20" },
    { id: 12, goal: "Engage in a new hobby", category: "Emotional", feedback: "Exploring new hobbies is enriching. Consider sharing your experiences.", createdDate: "2023-10-09" },
    { id: 13, goal: "Organize a monthly social gathering", category: "Social", feedback: "Your organizing skills are improving. Try diverse activities.", createdDate: "2023-09-29" },
    { id: 14, goal: "Volunteer twice a month", category: "Social", feedback: "Your commitment to volunteering is commendable.", createdDate: "2023-09-21" },
    { id: 15, goal: "Join a new club or group", category: "Social", feedback: "Great initiative. Engage actively for more benefits.", createdDate: "2023-09-02" },
    { id: 16, goal: "Call family members weekly", category: "Social", feedback: "Regular family contact is wonderful. Try video calls too.", createdDate: "2023-08-25" }
];


const StudentCheckInHistoryPage = () => {
    return (<div className='w-80 max-h-screen flex flex-col'>
        <GoalsList goals={sampleGoals}/>
    </div>
        
    );
};

export default StudentCheckInHistoryPage;
