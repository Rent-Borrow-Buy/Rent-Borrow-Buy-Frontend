import React, { useState } from 'react'

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor="Email-Input">
        <input 
          placeholder='email'
          id='Email-Input'
          name='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="Password-Input">
        <input 
          placeholder='password'
          id='Password-Input'
          name='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit'>sign-up</button>
    </form>
  )
}
