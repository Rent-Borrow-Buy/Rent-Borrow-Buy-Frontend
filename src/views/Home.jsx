import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../hooks/user';
import { getAllItems } from '../services/items';
import ItemCard from '../components/ItemCard/ItemCard';
import styles from './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [rentableFilter, setRentableFilter] = useState(true);
  const [borrowableFilter, setBorrowableFilter] = useState(true);
  const [buyableFilter, setBuyableFilter] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const { errorMessage, setErrorMessage } = useAuth();
  
  // formatting text for comparing search text to data text
  function process(s) {
    return s.toLowerCase().trim();
  }

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  
  // loads items for sale on page load
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getAllItems();
        setItems(data);
        setFilteredItems(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setErrorMessage(e.message);
    }
  }, []);

  // displays different items depending on user-selected filter
  useEffect(() => {
    const filter = () => {
      const newItems = items.filter(
        (item) =>
          (rentableFilter && item.rent) ||
          (buyableFilter && item.buy) ||
          (borrowableFilter && item.borrow)
      );
      const searchedItems = newItems.filter((item) =>
        process(item.title).includes(process(searchText))
      );
      setFilteredItems(searchedItems || []);
    };
    filter();
  }, [rentableFilter, borrowableFilter, buyableFilter, searchText]);

  if (loading) return <span>loading...</span>;

  return (
    <>
    {errorMessage && <span>{errorMessage}</span>}
    <div className={styles.searchFilters}>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchChange}
      />
      <div className={styles.filters}>
        <span
          className={rentableFilter ? styles.active : styles.off}
          onClick={() => setRentableFilter(!rentableFilter)}
        >
          rent
        </span>
        <span
          className={borrowableFilter ? styles.active : styles.off}
          onClick={() => setBorrowableFilter(!borrowableFilter)}
        >
          borrow
        </span>
        <span
          className={buyableFilter ? styles.active : styles.off}
          onClick={() => setBuyableFilter(!buyableFilter)}
        >
          buy
        </span>
      </div>
    </div>

    {filteredItems.map((item) => (
      <ItemCard key={item.id} {...item} />
    ))}
    <Link to="/creators" >
      <button className={styles.aboutButton}>meet the developers!</button>
    </Link>
    </>
  );
}
