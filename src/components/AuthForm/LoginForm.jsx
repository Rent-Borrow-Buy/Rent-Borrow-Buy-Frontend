import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/user';
import { useForm } from '../../hooks/useForm';
import styles from './AuthForm.css';

export default function LoginForm({ initialState, isSigningUp, setIsSigningUp }) {
  const { login, errorMessage, setErrorMessage } = useAuth();
  const { formState, handleChange } = useForm(initialState);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage('');
      await login(formState);
      history.replace('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.authForm}>
      {errorMessage}
      <label htmlFor="email">
        email:
      </label>
      <input 
        placeholder='email'
        id='Email-Input'
        name='email'
        type='email'
        value={formState.email}
        onChange={handleChange}
      />
      <label htmlFor="password">
        password:
      </label>
      <input 
        placeholder='password'
        id='Password-Input'
        name='password'
        type='password'
        value={formState.password}
        onChange={handleChange}
      />
      <button type='submit'>Sign in</button>
      <span className={styles.signInLinkContainer}>
        want to make an account?
          <span 
            className={styles.signInLink}
            onClick={() => setIsSigningUp(!isSigningUp)}
          >
            Sign up here
          </span>
      </span>
    </form>
  )
}
