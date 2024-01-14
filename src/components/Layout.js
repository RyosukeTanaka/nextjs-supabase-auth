import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Layout = ({ children }) => {
  const { user } = useContext(AuthContext); // Get the current user

  
  return (
    <>
      {/* Only show navbar if user is authenticated */}
      {user && (
        <div className="flex flex-wrap py-2">
          {/* ... your navigation bar code ... */}
        </div>
      )}

      <main>{children}</main>
    </>
  );
};

export default Layout;
