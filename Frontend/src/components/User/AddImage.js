import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../pages/Header';

function AddImage() {
  const [file, setFile] = useState(null);
  const location = useLocation();
  const id = location.state.id;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`http://localhost:8080/image/upload/${id}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Image uploaded successfully!');
        
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
    <Header></Header>
    <form onSubmit={handleSubmit}>
      <label htmlFor="file">Choose an image:</label>
      <input type="file" id="file" onChange={handleFileChange} />

      <button type="submit" disabled={!file}>
        Upload
      </button>
    </form>
    </>
  );
}

export default AddImage;
