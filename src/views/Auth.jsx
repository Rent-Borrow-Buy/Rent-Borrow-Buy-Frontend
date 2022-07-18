import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LoginForm from '../components/LoginForm';

export default function Auth() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  return (
    <>
      {
        isSigningUp ?
          <SignUpForm 
            isSigningUp={isSigningUp} 
            setIsSigningUp={setIsSigningUp}
            initialState={{
              email: '',
              password: '',
              username: '',
              firstName: '',
              lastName: '',
              zipcode: ''
            }}
          /> :
          <LoginForm 
            isSigningUp={isSigningUp} 
            setIsSigningUp={setIsSigningUp}
            initialState={{
              email: '',
              password: ''
            }}
          />
      }
    </>
  );
}
