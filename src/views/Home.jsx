import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../hooks/user';
import { getAllItems } from '../services/items';
import ItemCard from '../components/ItemCard/ItemCard';
import Logout from '../components/LogoutButton/LogoutButton';
import styles from './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [rentableFilter, setRentableFilter] = useState(true);
  const [borrowableFilter, setBorrowableFilter] = useState(true);
  const [buyableFilter, setBuyableFilter] = useState(true);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const { errorMessage, setErrorMessage } = useAuth();

  function process(s) {
    return s.toLowerCase().trim();
  }
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

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
    <Logout/>
      {errorMessage && <span>{errorMessage}</span>}
      <Link to="/creators" >
      <button>About Creators</button>
    </Link>
      <div className={styles.filters}>
        <span
          className={rentableFilter ? styles.active : ''}
          onClick={() => setRentableFilter(!rentableFilter)}
        >
          rent
        </span>
        <span
          className={borrowableFilter ? styles.active : ''}
          onClick={() => setBorrowableFilter(!borrowableFilter)}
        >
          borrow
        </span>
        <span
          className={buyableFilter ? styles.active : ''}
          onClick={() => setBuyableFilter(!buyableFilter)}
        >
          buy
        </span>
      </div>

      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchChange}
      />

      {filteredItems.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </>
  );
}
