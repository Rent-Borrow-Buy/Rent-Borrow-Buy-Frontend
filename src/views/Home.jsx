import React from 'react';
import { useAuth } from '../hooks/user';

export default function Home() {
  const { logout } = useAuth();
  return (
    <>
      <div>Home</div>
      <button onClick={() => logout()}>log out</button>
    </>
  );
}
