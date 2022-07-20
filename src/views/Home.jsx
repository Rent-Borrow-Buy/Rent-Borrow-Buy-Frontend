import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../hooks/user';
import { getAllItems } from '../services/items';
import ItemCard from '../components/ItemCard/ItemCard';

export default function Home() {
  const [items, setItems] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
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
      <span onClick={() => setRentableFilter(!rentableFilter)}>rent</span>
      <span onClick={() => setBorrowableFilter(!borrowableFilter)}>borrow</span>
      <span onClick={() => setBuyableFilter(!buyableFilter)}>buy</span>
      <button onClick={() => logout()}>log out</button>
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </>
  );
}
