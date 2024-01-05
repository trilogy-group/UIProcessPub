import React from 'react';
import GoalsList from '../components/GoalList';
import VideoPlayer from '../components/VideoPlayer';


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

const students = [
    { id: '1', name: 'John Doe', imageSrc: 'https://static.livebooks.com/a3bda11fe04d4e2b91a0c0e497555041/i/f202266b6c23445da9eb412b7a9106e4/1/4SoifmQp7LJ6yDtMuFY2x/kids_headshots_Atlanta_marietta.jpg' },
    { id: '2', name: 'Jane Smith', imageSrc: 'https://images.squarespace-cdn.com/content/v1/555bd2ece4b00127a2b1264f/1620704048811-1CYPTG3HKGVWIEER1AEJ/1_kids_acting_headshot_for_rayna_by_michael_verity_photography.jpg?format=750w' },
    { id: '3', name: 'Alice Johnson', imageSrc: 'https://images.squarespace-cdn.com/content/v1/5c4d7e227e3c3a6ec70a5ac7/749442e8-9f2a-423f-abf8-6dacbb512156/Child+Actors+Headshots+Los+Angeles%2CLondon%2C+New+York.+%28RORY+LEWIS+Photographer%29' },
  ];

const StudentCheckInHistoryPage = () => {
    return (<div className='flex'>
        <div className='w-80 max-h-screen flex flex-col'>
            <GoalsList goals={sampleGoals} />
        </div>
        <div className='flex flex-col my-4 mx-auto'>
            <div className="grid gap-6">
                <h2 className="text-xl"><span className='font-bold'>Check-In:</span> Run 5km thrice a week </h2>
                <div className="text-sm flex items-start gap-4">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                        <img className="w-full object-cover" alt="@user1" src={students[0].imageSrc}/>
                    </span>
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold">user1</div>
                            <div className="text-gray-500 text-xs dark:text-gray-400">5 minutes ago</div>
                        </div>
                        <div className="w-full aspect-[16/9]">
                            <div><VideoPlayer src='src/assets/video.mp4'/></div>
                        </div>
                    </div>
                </div>
                <div className="text-sm flex items-start gap-4 ml-14">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                        <img className="w-full object-cover" alt="@user2" src={students[1].imageSrc} />
                    </span>
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold">user2</div>
                            <div className="text-gray-500 text-xs dark:text-gray-400">3 minutes ago</div>
                        </div>
                        <div>Great work! Look forward to our meeting. Keep it up!.</div>
                    </div>
                </div>
                <div className="text-sm flex items-start gap-4 ml-28">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                        <img className="w-full object-cover" alt="@user3" src={students[0].imageSrc}/>
                    </span>
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold">user3</div>
                            <div className="text-gray-500 text-xs dark:text-gray-400">1 minute ago</div>
                        </div>
                        <div>@user2 Thanks!</div>
                    </div>
                </div>
                <div className="text-sm flex items-start gap-4">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                        <img className="w-full object-cover" alt="@user4" src={students[2].imageSrc} />
                    </span>
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold">user4</div>
                            <div className="text-gray-500 text-xs dark:text-gray-400">Just now</div>
                        </div>
                        <div>Check out my latest podcast episode!</div>
                        <div className="w-full aspect-[16/9]">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default StudentCheckInHistoryPage;
