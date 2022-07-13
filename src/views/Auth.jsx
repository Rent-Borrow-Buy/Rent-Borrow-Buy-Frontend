import React from 'react'
import AuthForm from '../components/AuthForm'
import { signOut } from '../services/users'

export default function Auth() {
  return (
    <>
      <AuthForm />
      <button onClick={() => signOut()}>log out</button>
    </>
  )
}
