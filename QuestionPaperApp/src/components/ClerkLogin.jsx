import React from 'react';
import { SignIn, SignUp, ClerkProvider } from '@clerk/clerk-react';

const ClerkLogin = () => {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <div className="login-container">
        <div className="login-wrapper">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </ClerkProvider>
  );
};

export default ClerkLogin;
