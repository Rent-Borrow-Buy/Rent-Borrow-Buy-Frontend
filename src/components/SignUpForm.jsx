import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/user';
import { useForm } from '../hooks/useForm';

export default function SignUpForm({ initialState, setIsSigningUp }) {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="Username-Input">
        <input
          placeholder="username (optional)"
          id="Username-Input"
          name="username"
          type="text"
          value={formState.username}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Email-Input">
        <input
          placeholder="email"
          id="Email-Input"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Password-Input">
        <input
          placeholder="password"
          id="Password-Input"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="First-Name-Input">
        <input
          placeholder="first name"
          id="First-Name-Input"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Last-Name-Input">
        <input
          placeholder="last name"
          id="Last-Name-Input"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Zipcode-Input">
        <input
          placeholder="zip code (optional)"
          id="Zipcode-Input"
          name="zipcode"
          type="number"
          value={formState.zipcode}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}
