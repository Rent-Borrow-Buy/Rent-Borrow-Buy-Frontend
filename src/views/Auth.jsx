import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

export default function Auth() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  return (
    <>
      {
        isSigningUp ?
          <SignUpForm { ...setIsSigningUp } /> :
          <LoginForm { ...setIsSigningUp } />
      }
    </>
  );
}
