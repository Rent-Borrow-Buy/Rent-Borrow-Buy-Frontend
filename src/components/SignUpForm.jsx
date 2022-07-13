import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/user';
import { useForm } from '../hooks/useForm';

export default function SignUpForm({ initialState }) {
  const { signUpUser, errorMessage, setErrorMessage } = useAuth();

  const { formState, handleChange, clearForm } = useForm(initialState);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      setErrorMessage('');
      await signUpUser(formState.email, formState.password);
      history.replace('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Email-Input">
        {' '}
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
        {' '}
        <input
          placeholder="password"
          id="Password-Input"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}
