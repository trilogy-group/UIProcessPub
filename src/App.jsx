import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MentorHomePage from './pages/MentorHomePage';
import MentorMeetingsPage from './pages/MentorMeetingsPage';
import StudentHomePage from './pages/StudentHomePage';
import StudentGoalsPage from './pages/StudentGoalsPage';
import StudentProgressPage from './pages/StudentProgressPage';
import NavigationMenu from './components/NavigationMenu';
import { MeetingsProvider } from './contexts/MeetingsContext';
import StudentPage from './pages/StudentPage';
import AccountPage from './pages/AccountPage';
import MentorStudentPage from './pages/MentorStudentPage';
import MentorProgressPage from './pages/MentorProgressPage';
// Import other necessary components...

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleSignIn = (role) => {
    setUserRole(role);
  };

  const handleSignOut = () => {
    setUserRole(null);
  };

  const handleSignUp = (e, userDetails) => {
    e.preventDefault();
    // TODO: Implement sign-up functionality
  };

  return (
    <MeetingsProvider>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignInPage onSignIn={handleSignIn} />} />
          <Route path="/sign-up" element={<SignUpPage onSignUp={handleSignUp} />} />
          {/* Protected routes with navigation */}
          <Route element={<ProtectedLayout userRole={userRole} onSignOut={handleSignOut} />}>
            <Route index element={<MentorHomePage />} /> // Assuming this is the default page after login
            <Route path="/account" element={<AccountPage />} />
            <Route path="mentor-home" element={<MentorHomePage />} />
            <Route path="/students/:studentId" element={<StudentPage />} /> {/* Dynamic route */}
            <Route path="/students/:studentId/goals" element={<MentorStudentPage />} /> {/* Dynamic route */}
            <Route path="/students/:studentId/progress" element={<MentorProgressPage />} /> {/* Dynamic route */}
            <Route path="mentor-meetings" element={<MentorMeetingsPage />} />
            <Route path="student-home" element={<StudentHomePage />} />
            <Route path="student-goals" element={<StudentGoalsPage />} />
            <Route path="student-progress" element={<StudentProgressPage />} />
            {/* Add additional protected routes as needed */}
          </Route>
        </Routes>
      </Router>
    </MeetingsProvider>
  );
}

// ProtectedLayout component
function ProtectedLayout({ userRole, onSignOut }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userRole) {
      navigate('/sign-in');
    }
  }, [userRole, navigate]);

  const handleLogout = () => {
    onSignOut();
    navigate('/sign-in');
  };

  if (!userRole) {
    // Optionally, show a loading indicator or return null while the navigation is taking place
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <NavigationMenu userRole={userRole} onLogout={handleLogout} />
      <div className="flex-1">
        <Outlet /> {/* This is where the nested route's component will be rendered */}
      </div>
    </div>
  );
}

export default App;
