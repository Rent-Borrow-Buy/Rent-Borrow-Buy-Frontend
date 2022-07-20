import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../hooks/user';
import { getAllItems } from '../services/items';
import ItemCard from '../components/ItemCard/ItemCard';

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [rentableFilter, setRentableFilter] = useState(false);
  const [borrowableFilter, setBorrowableFilter] = useState(false);
  const [buyableFilter, setBuyableFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  const { 
    logout,
    errorMessage, 
    setErrorMessage,
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

  useEffect(() => {
    const filter = () => {
      const newItems = items.filter((item) => (rentableFilter && item.rent) || (buyableFilter && item.buy) || (borrowableFilter && item.borrow));
      setFilteredItems(newItems || []);
    }
    filter();
  }, [rentableFilter, borrowableFilter, buyableFilter]);
  if (loading) return <span>loading...</span>


  return (
    <>
      {errorMessage && <span>{errorMessage}</span>}
      <span onClick={() => setRentableFilter(!rentableFilter)}>rent</span>
      <span onClick={() => setBorrowableFilter(!borrowableFilter)}>borrow</span>
      <span onClick={() => setBuyableFilter(!buyableFilter)}>buy</span>
      <button onClick={() => logout()}>log out</button>
      {
        filteredItems.length ?
        filteredItems.map((item) => <ItemCard key={item.id} {...item} />) :
        items.map((item) => <ItemCard key={item.id} {...item} />)
      }
    </>
  );
}
