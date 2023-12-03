import React, { useState } from 'react';

const ImageUploadByBash = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const uploadImage = async () => {

    if (!selectedImage) {
      alert('Please select an image to upload.');
      return;
    }

    const reader = new FileReader();

    reader.onload = async function (e) {
      const base64Data = e.target.result.split(',')[1]; 

      // Send the base64 data to your server (using fetch or another AJAX method)
      const response = await fetch('http://localhost:5000/api/bashImage/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Data }),
      });

      const result = await response.json();

      // Handle the server's response (e.g., display a success message)
      if (result.success) {
        alert('Image uploaded successfully!');
      } else {
        alert('Error uploading image. Please try again.',result);
      }
    };

    reader.readAsDataURL(selectedImage);
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button onClick={uploadImage}>Upload Image</button>

      <img src="http://localhost:5000/api/bashImage/6566545e0eae1e5b142817a5" alt="Displayed Image" />

    </div>
  );
};

export default ImageUploadByBash;
