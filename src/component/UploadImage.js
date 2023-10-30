import React, { useState } from 'react'

function UploadImage() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setMessage('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);


        try {
            const response = await fetch('http://localhost:5000/api/uploadImage', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(`Image uploaded successfully. Image ID: ${data.fileId}`);
            } else {
                setMessage('Error uploading image.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    return (
        <div>
            <h1>Image Upload</h1>
            <input type="file" name="image" accept="image/*"   onChange={handleFileChange} />
            <button className='bg-blue-500' onClick={handleUpload}>Upload Image</button>
            <div>{message}</div>
        </div>
    )
}

export default UploadImage
