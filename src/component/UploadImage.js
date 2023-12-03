import React, { useState, useContext } from 'react';
import axios from 'axios';
import mainContext from '../Context/mainContext';

const ImageUploadForm = () => {
  const context = useContext(mainContext);
  const {setUploadedImage,uploadedImage} = context;
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // const handleUpload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('image', file);

  //     await axios.post('http://localhost:5000/api/uploadImage/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });


  //     // Handle success, e.g., show a success message
  //     console.log('Image uploaded successfully');
  //   } catch (error) {
  //     // Handle error, e.g., show an error message
  //     console.error('Error uploading image', error);
  //   }
  // };


  const handleUpload = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append('image', file);
  
      const response = await axios.post('http://localhost:5000/api/uploadImage/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Extract imageId from the response
      const { imageId } = response.data;
  
      // Now you can use the imageId variable as needed
      console.log('Image ID:', imageId);
      setUploadedImage(imageId);
  
      // Handle success, e.g., show a success message
      console.log('Image uploaded successfully');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error uploading image', error);
    }
  };

  return (
    <>
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      
    </div>
    {/* <div>
        <img src="http://localhost:5000/api/uploadImage/656661573c178cff7797d4b2" alt="Displayed Image" />

    </div> */}
    </>
  );
};

export default ImageUploadForm;
