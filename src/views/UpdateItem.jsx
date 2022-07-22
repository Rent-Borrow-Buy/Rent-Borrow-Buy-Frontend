import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import DeleteButton from '../components/DeleteButton/DeleteButton';
import toast from 'react-hot-toast';
import styles from './AddItem.css';

export default function UpdateItem() {
  const history = useHistory();
  const { id } = useParams();
  const [previewSource, setPreviewSource] = useState();

  // controls form inputs
  const { formState, handleChange, setFormState } = useForm({
    rent: false,
    buy: false,
    borrow: false,
    sold: false,
  });

  // initializes form with item to be updated
  useEffect(() => {
    const getItem = async (id) => {
      const resp = await fetch(process.env.API_URL + `/api/v1/items/${id}`);
      const itemDetails = await resp.json();
      setFormState(itemDetails);
    };
    getItem(id);
  }, []);

  // updates database for item
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('you clicked submit!');
    try {
      const item_res = await fetch(
        process.env.API_URL + `/api/v1/items/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ ...formState, encodedImage: previewSource }),
          credentials: 'include',
          mode: 'cors',
          headers: { 'Content-type': 'application/json' },
        }
      );
      toast.success('Successfully updated item!');
      history.push('/');
    } catch (e) {
      toast.error('Error encountered on update. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.addItemForm}>
        <Link to="/">
          <button className={styles.homeButton}>&lt;&lt; return home</button>
        </Link>
        <label htmlFor="title" />
        <input
          type="text"
          placeholder="Item name"
          id="title"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
        <section className={styles.checkboxesPrice}>
          <div className={styles.checkboxes}>
            <label htmlFor="rent">
              Rent
              <input
                type="checkbox"
                id="rent"
                name="rent"
                checked={formState.rent}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="borrow">
              Borrow
              <input
                type="checkbox"
                id="borrow"
                name="borrow"
                checked={formState.borrow}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="buy">
              Buy
              <input
                type="checkbox"
                id="buy"
                name="buy"
                checked={formState.buy}
                onChange={handleChange}
              />
            </label>
          </div>
          <label htmlFor="price" />
          <input
            className={styles.price}
            type="number"
            step="any"
            id="price"
            name="price"
            placeholder="price"
            value={formState.price}
            onChange={handleChange}
          />
          <label htmlFor="description" />
        </section>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="33"
          value={formState.description}
          onChange={handleChange}
          placeholder="Describe your item"
        />
        <label htmlFor="zipcode" />
        <input
          id="zipcode"
          name="zipcode"
          value={formState.zipcode}
          onChange={handleChange}
          placeholder="Zip Code"
        />
        <div className={styles.addItemButtons}>
          <button className={styles.addItemButton} type="submit">submit</button>
          <DeleteButton/>
        </div>

      </form>
    </>
  );
}
