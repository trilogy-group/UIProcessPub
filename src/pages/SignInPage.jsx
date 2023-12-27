import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function SignInPage({ onSignIn }) {
    const [role, setRole] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (event) => {
        event.preventDefault();
        if (role) {
            onSignIn(role); // Update the role in App's state
            navigate(role === 'mentor' ? '/mentor-home' : '/student-home'); // Navigate based on role
        }
    };

    return (
        <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="mentor">Mentor</option>
            <option value="student">Student</option>
          </select>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
//         <div className="w-full min-h-screen bg-gray-100">
//             <main className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//                 <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                     <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
//                         <div className="space-y-6">
//                             <div className="space-y-2 text-center">
//                                 <h1 className="text-3xl font-bold">Welcome!</h1>
//                             </div>
//                             <form className="space-y-6">
//                                 <div className="space-y-2">
//                                     <label
//                                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                         htmlFor="username"
//                                     >
//                                         Username
//                                     </label>
//                                     <input
//                                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                                         id="username"
//                                         required=""
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label
//                                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                         htmlFor="password"
//                                     >
//                                         Password
//                                     </label>
//                                     <input
//                                         type="password"
//                                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                                         id="password"
//                                         required=""
//                                     />
//                                 </div>
//                                 <button
//                                     className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:opacity-80 h-10 px-4 py-2 w-full"
//                                     type="submit"
//                                     onSubmit={handleSubmit}
//                                 >
//                                     Log in
//                                 </button>
//                             </form>
//                             <div className="flex justify-center">
//                                 <NavLink className="underline" to="/sign-up" rel="ugc">
//                                     Don't have an account? Sign up
//                                 </NavLink>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
}

export default SignInPage;
