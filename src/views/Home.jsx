import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../hooks/user';
import { UserContext } from '../context/UserContext';
import { getAllItems } from '../services/items';

export default function Home() {
  const [items, setItems] = useState([]);
  const { 
    logout,
    errorMessage, 
    setErrorMessage,
    loading,
    setLoading
  } = useAuth();

  useEffect(() => {
    console.log('hello');
    try {
      const fetchData = async () => {
        const data = await getAllItems();
        setItems(data);
        setLoading(false);
      }
      fetchData();
    } catch (e) {
      setErrorMessage(e.message);
    }
  }, []);

  return (
    <>
      {loading && <span>loading...</span>}
      {errorMessage && <span>{errorMessage}</span>}
      <div>Home</div>
      <button onClick={() => logout()}>log out</button>
    </>
  );
}
