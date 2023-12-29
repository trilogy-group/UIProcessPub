import React from 'react';

const AccountPage = () => {
    return (
        <main className="p-4 flex flex-col md:flex-row justify-center gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-1/2 p-6">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Account Details</h3>
                    <p className="text-sm text-muted-foreground">View and edit your account information</p>
                </div>
                <span className=''>
                    <div style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)' }}
                        className="relative mt-4 mx-auto w-32 h-32 rounded-full overflow-hidden cursor-pointer group shadow-lg">
                        <img src="src/assets/investment-calculator-logo.png" alt="Account Profile Picture" className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                <path d="m15 5 4 4"></path>
                            </svg>
                        </div>
                    </div>


                </span>

                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="firstName"
                            >
                                First Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="firstName"
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="lastName"
                            >
                                Last Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="lastName"
                                placeholder="MacTavish"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="username"
                            placeholder="SoapyBoy"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="email"
                            placeholder="john.doe@mentormate.com"
                            type="email"
                        />
                    </div>
                    <div className="flex justify-end space-y-2 items-end">
                        <button className="inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-opacity-90 h-10 px-4 py-2 mt-4">
                            Update Information
                        </button>
                    </div>
                </div>
            </div>
            <div className="ml-auto rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-1/2 p-6">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Change Password</h3>
                    <p className="text-sm text-muted-foreground">
                        Ensure your account is using a long, random password to stay secure
                    </p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="currentPassword"
                        >
                            Current Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="currentPassword"
                            placeholder="Enter your current password"
                            type="password"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="newPassword"
                        >
                            New Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="newPassword"
                            placeholder="Enter your new password"
                            type="password"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="confirmPassword"
                            placeholder="Confirm your new password"
                            type="password"
                        />
                    </div>
                </div>
                <div className="flex items-center p-6">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-opacity-80 h-10 px-4 py-2 ml-auto">
                        Change Password
                    </button>
                </div>
            </div>
        </main>
    );
};

export default AccountPage;
