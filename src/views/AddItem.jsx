import React from 'react';
import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import { useForm } from '../hooks/useForm';

export default function AddItem() {
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState('');
  const { formState, handleChange, clearForm } = useForm({
    rent: false,
    buy: false,
    borrow: false,
    sold: false,
  });
  console.log('formState', formState);

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    console.log('you clicked submit!');
    const item_res = await fetch(process.env.API_URL + '/api/v1/items', {
      method: 'POST',
      body: JSON.stringify({ ...formState, encodedImage: previewSource }),
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-type': 'application/json' },
    });

    console.log('item_res', item_res);
  };

  return (
    <>
      <form onSubmit={handleSubmitFile}>
        <label htmlFor="title">Item name</label>
        <input
          type="text"
          placeholder="Item name"
          id="title"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />

        <input
          type="checkbox"
          id="rent"
          name="rent"
          checked={formState.rent}
          onChange={handleChange}
        />
        <label htmlFor="rent">Rent</label>

        <input
          type="checkbox"
          id="borrow"
          name="borrow"
          checked={formState.borrow}
          onChange={handleChange}
        />
        <label htmlFor="borrow">Borrow</label>

        <input
          type="checkbox"
          id="buy"
          name="buy"
          checked={formState.buy}
          onChange={handleChange}
        />
        <label htmlFor="buy">Buy</label>

        <label htmlFor="description">Item Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="33"
          value={formState.description}
          onChange={handleChange}
          placeholder="Describe your item"
        />
        <label htmlFor="zipcode">Zip Code</label>
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
        <button type="submit">Submit Item</button>
      </form>
      {previewSource && (
        <img
          src={previewSource}
          alt="chosen file"
          style={{ height: '300px' }}
        />
      )}
    </>
  );
}
