import React from 'react';
import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';

export default function AddItem() {
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState('');

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (encodedImage) => {
    console.log(encodedImage);
    try {
      await fetch(process.env.API_URL + '/api/v1/imageupload', {
        method: 'POST',
        body: JSON.stringify({ data: encodedImage }),
        headers: { 'Content-type': 'application/json' },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitFile}>
        <ImageUpload
          setPreviewSource={setPreviewSource}
          setSelectedFile={setSelectedFile}
        />
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
