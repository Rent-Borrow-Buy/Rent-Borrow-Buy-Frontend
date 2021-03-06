import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LoginForm from '../components/LoginForm';
import styles from './Auth.css';

export default function Auth() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  return (
    <div className={styles.auth}>
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
    </div>
  );
}
