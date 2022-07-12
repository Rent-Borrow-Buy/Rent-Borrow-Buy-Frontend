import React, { useState } from 'react'
import { signUp } from '../services/users';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit', email);
    try {
      setErrorMessage('');
      await signUp({ email, password });
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Email-Input">
        <input 
          placeholder='email'
          id='Email-Input'
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="Password-Input">
        <input 
          placeholder='password'
          id='Password-Input'
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit'>sign-up</button>
    </form>
  )
}
