import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/user';
import { signUp } from '../services/users';
export default function AuthForm() {

  const { login, errorMessage, setErrorMessage } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(true);
 
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage('');
      isSigningUp ?
      await signUp({ email, password }) : 
      await login(email, password);
      history.replace('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {isSigningUp ? <span onClick={() => setIsSigningUp(!isSigningUp)}>Sign up</span> : <span onClick={() => setIsSigningUp(!isSigningUp)}>Sign in</span>}
      <label htmlFor="Email-Input">
        {' '}
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
      {' '}

        <input 
          placeholder='password'
          id='Password-Input'
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit'>
        {isSigningUp ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  )
}
