import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../hooks/user';
import { getAllItems } from '../services/items';
import ItemCard from '../components/ItemCard/ItemCard';

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
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </>
  );
}
