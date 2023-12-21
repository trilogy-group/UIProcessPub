import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <button type="submit" disabled={!role}>Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
