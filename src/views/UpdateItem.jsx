import React from 'react';
import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import { useForm } from '../hooks/useForm';
import styles from './AddItem.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DeleteButton from '../components/DeleteButton/DeleteButton';

export default function UpdateItem() {
  const { id } = useParams();
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState('');

  const { formState, handleChange, clearForm, setFormState } = useForm({
    rent: false,
    buy: false,
    borrow: false,
    sold: false,
  });

  useEffect(() => {
    const getItem = async (id) => {
      const resp = await fetch(process.env.API_URL + `/api/v1/items/${id}`);
      const itemDetails = await resp.json();
      setFormState(itemDetails);
    };
    getItem(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('you clicked submit!');
    const item_res = await fetch(process.env.API_URL + `/api/v1/items/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ ...formState, encodedImage: previewSource }),
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-type': 'application/json' },
    });

    console.log('item_res', item_res);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.addItemForm}>
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
        <ImageUpload
          setPreviewSource={setPreviewSource}
          setSelectedFile={setSelectedFile}
        />
        {previewSource && (
          <img
            src={previewSource}
            alt="chosen file"
            style={{ height: '300px' }}
          />
        )}
        <button type="submit">Submit Item</button>
      </form>
      <DeleteButton/>
    </>
  );
}