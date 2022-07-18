import React from 'react';
import { useState } from 'react';

export default function ImageUpload({ setPreviewSource, setSelectedFile }) {
  const [fileInputState, setFileInputState] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <>
      <label htmlFor="image">Upload an image of your item:</label>
      <input
        type="file"
        name="image"
        id="image"
        onChange={handleFileInputChange}
        value={fileInputState}
      />
    </>
  );
}
