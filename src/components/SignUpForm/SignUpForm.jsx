import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/user';
import { useForm } from '../../hooks/useForm';
import styles from './SignUpForm.css';

export default function SignUpForm({ initialState, setIsSigningUp, isSigningUp }) {
  const { signUpUser, errorMessage, setErrorMessage } = useAuth();

  const { formState, handleChange, clearForm } = useForm(initialState);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage('');
      await signUpUser(formState);
      history.replace('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <label htmlFor="email">
        sign up with your email: *
      </label>
      <input
        placeholder="email"
        id="Email-Input"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <label htmlFor="password">
        choose a password (more than 6 characters): *
      </label>
      <input
        placeholder="password"
        id="Password-Input"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      <label htmlFor="username">
        pick a username:
      </label>
      <input
        placeholder="username (optional)"
        id="Username-Input"
        name="username"
        type="text"
        value={formState.username}
        onChange={handleChange}
      />
      <label htmlFor="firstName">
        what's your name?
      </label>
      <input
        placeholder="first name"
        id="First-Name-Input"
        name="firstName"
        type="text"
        value={formState.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">
      </label>
      <input
        placeholder="last name"
        id="Last-Name-Input"
        name="lastName"
        type="text"
        value={formState.lastName}
        onChange={handleChange}
      />
      <label htmlFor="zipcode">
        enter your zipcode: 
      </label>
      <input
        placeholder="zip code (optional)"
        id="Zipcode-Input"
        name="zipcode"
        type="number"
        value={formState.zipcode}
        onChange={handleChange}
      />
      <button type="submit">Sign up</button>
      <span>
        already have an account?
          <span 
            className={styles.signInLink}
            onClick={() => setIsSigningUp(!isSigningUp)}
          >
            Sign in here
          </span>
      </span>
    </form>
  );
}
