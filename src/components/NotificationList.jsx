import React from 'react';

const NotificationList = () => {
    return (
        <> {/* Take remaining space */}
                <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="tracking-tight font-bold text-lg">Notifications</h3>
                    <p className="text-sm text-muted-foreground">You have 3 unread messages.</p>
                </div>
                <div className="overflow-scroll p-4"> {/* Scrollable list */}
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your call has been confirmed.</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">5 min ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">You have a new message!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">1 min ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"></span>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </div>
                    
                </div>
        </>
    );
};

export default NotificationList;
