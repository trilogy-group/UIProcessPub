import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function ProtectedLayout({ userRole, onSignOut }) {
  const navigate = useNavigate();

  // If there is no userRole, navigate to the sign-in page
  React.useEffect(() => {
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

export default ProtectedLayout;
