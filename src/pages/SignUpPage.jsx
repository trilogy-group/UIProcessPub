import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const ToggleInput = () => {
    const [selectedOption, setSelectedOption] = useState("Student");
    const [didRender, setDidRender] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        // Calculate the target x position based on the selected option
        const targetX = selectedOption === "Student" ? 0 : '100%';
        if (didRender) {
            controls.start({
                x: targetX,
                scaleX: [1, 1.35, 1],
                transition: {
                    duration: 0.5,
                    ease: "easeInOut" // You can customize the easing here
                }
            });
        }
        setDidRender(true);
        // Start the animation with custom keyframes and easing

    }, [selectedOption, controls]);

    const handleToggle = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="relative flex rounded overflow-hidden w-100 bg-white">
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-1/2 bg-neutral-600"
                animate={controls}
                transition={{ type: "tween" }}
            />
            <div
                className="flex-1 cursor-pointer p-2 text-center z-10"
                onClick={() => handleToggle("Student")}
            >
                <motion.span
                    animate={{ color: selectedOption === "Student" ? "#ffffff" : "#000000" }}
                    transition={{ type: "tween" }}
                >
                    Student
                </motion.span>
            </div>
            <div
                className="flex-1 cursor-pointer p-2 text-center z-10"
                onClick={() => handleToggle("Mentor")}
            >
                <motion.span
                    animate={{ color: selectedOption === "Mentor" ? "#ffffff" : "#000000" }}
                    transition={{ type: "tween" }}
                >
                    Mentor
                </motion.span>
            </div>
        </div>
    );
};

function SignUpPage({ onSignUp }) {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <main className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                        <div className="space-y-6">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">Sign up</h1>
                            </div>
                            <form className="space-y-6">
                                <div className="flex space-x-4">
                                    {/* First Name */}
                                    <div className="flex-1 space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium">
                                            First Name
                                        </label>
                                        <input id="first-name" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                                    </div>

                                    {/* Last Name */}
                                    <div className="flex-1 space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium">
                                            Last Name
                                        </label>
                                        <input id="last-name" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
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
                                        required={true}
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
                                        required={true}
                                        type="email"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="role"
                                    >
                                        I am a:
                                    </label>
                                    <ToggleInput />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="password"
                                        required={true}
                                        type="password"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="confirm-password"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="confirm-password"
                                        required={true}
                                        type="password"
                                    />
                                </div>
                                <button
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-opacity-80 h-10 px-4 py-2 w-full"
                                    type="submit"
                                    onSubmit={onSignUp}
                                >
                                    Sign up
                                </button>
                            </form>
                            <div className="flex justify-center">
                                <NavLink className="underline" to='/sign-in'>
                                    Already have an account? Log in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SignUpPage;