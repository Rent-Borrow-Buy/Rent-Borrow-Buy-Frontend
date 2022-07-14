import React from 'react'
import { useState } from 'react';
import ImageUpload from '../components/ImageUpload'

export default function AddItem() {
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState('');

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  }

  const uploadImage = (endcodedImage) => {
    console.log(endcodedImage);
  }
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
          style={{height: '300px'}}
        />
      )}
    </>
  )
}
