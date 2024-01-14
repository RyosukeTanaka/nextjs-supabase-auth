//  src/components/withAuth.js

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthProvider';

const withAuth = (WrappedComponent) => (props) => {
  const router = useRouter();
  const { user } = useContext(AuthContext); // Assuming AuthContext provides user

  useEffect(() => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-in if not authenticated
    }
  }, [user, router]);

  return <WrappedComponent {...props} />;
};

export default withAuth;
