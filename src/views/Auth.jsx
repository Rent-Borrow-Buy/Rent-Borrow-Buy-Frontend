import React from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

export default function Auth() {
  return (
    <>
      <SignUpForm />
      <LoginForm/>
    </>
  );
}
