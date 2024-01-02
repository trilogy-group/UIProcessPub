import React from 'react';

const GoalCard = ({ category, lastScore, overallTrend, percentageChange, latestFeedback }) => {
    const scoreBgClass = lastScore >= 8 ? 'bg-green-500' :
        lastScore >= 6 ? 'bg-yellow-500' :
            'bg-red-500';

    // Determine the text color for the percentage change
    const percentageChangeClass = percentageChange.startsWith('+') ? 'text-green-500' :
        percentageChange.startsWith('-') ? 'text-red-500' :
            'text-gray-500';

    // Determine the text color for the overall trend
    const trendClass = overallTrend === 'Positive' ? 'text-green-500' :
        overallTrend === 'Negative' ? 'text-red-500' :
            'text-gray-500';

    const isNegativeChange = percentageChange.startsWith('-');
    const isNoChange = percentageChange === "0%";


    return (
        <div
            className="border bg-card text-card-foreground shadow-lg w-full lg:overflow-auto max-w-sm p-6 gap-2 flex flex-col rounded-lg items-center justify-center"
        >
            <h1 className="font-semibold tracking-tight text-2xl mb-2">{`${category.slice(0, 1).toUpperCase() + category.slice(1)} Goal`}</h1>
            <div className="flex flex-col items-center space-y-2 p-0">
                <p className="text-xs flex items-center">
                    Last Updated Score:
                </p>
                <div className={`${scoreBgClass} rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl font-bold text-center`}>
                    {lastScore}
                </div>
            </div>
            <div className="p-0 flex flex-col gap-4 overflow-scroll">
                <div className="flex items-center gap-4 text-sm mx-auto">
                    <div className="flex gap-2 items-center">
                    {isNoChange ? (
                    <svg className="w-4 h-4 fill-gray-500 stroke-gray-500" viewBox="0 0 24 24">
                        <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
                    </svg>
                ) : isNegativeChange ? (
                    <svg className="w-4 h-4 fill-red-500 stroke-red-500 stroke-8" viewBox="0 0 24 24">
                        <path d="M12 19v-14" strokeWidth={2}/>
                        <path d="M19 12l-7 7-7-7" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 fill-green-500 stroke-green-500" viewBox="0 0 24 24">
                        <path d="M12 5v14" strokeWidth={2}/>
                        <path d="M5 12l7-7 7 7" />
                    </svg>
                )}
                        <span className={percentageChangeClass}>{percentageChange}</span> from last update
                    </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex gap-2 items-center font-semibold">
                        Overall Trend: <span className={trendClass}> {overallTrend}</span>
                    </div>
                </div>

                <div className="items-center overflow-scroll text-sm">
                    <div className="items-center ">
                        <span className='font-semibold'>Latest Feedback: </span>
                        {latestFeedback}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalCard;
