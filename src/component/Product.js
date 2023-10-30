import React, { useState, useContext } from 'react'
import mainContext from '../Context/mainContext'

function Product() {

    const context = useContext(mainContext)
    const { productCredential, setProductCredential, addProduct } = context;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProductCredential(values => ({ ...values, [name]: value }))
    }

    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };



    const submit = async (e) => {
        e.preventDefault();
        console.log(productCredential);
    
        const formData = new FormData();
        formData.append('name', productCredential.name);
        formData.append('description', productCredential.description);
        formData.append('price', productCredential.price);
        formData.append('stockQuantity', productCredential.quantity);
        formData.append('categoryName', productCredential.category);
        formData.append('image', selectedFile);
    
        try {
            await addProduct(formData);
            
           
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form action="" className='w-52 bg-blue-500 mx-auto'>
                <div className=''>
                    <label htmlFor="">
                        Name:
                        <input className='border-2 border-black' type="text" name="name" value={productCredential.name} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label htmlFor="description">
                        Description:
                        <input className='border-2 border-black' type="text" name='description' value={productCredential.description} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Price:
                        <input className='border-2 border-black' type="number" name='price' value={productCredential.price} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Stock Quantity:
                        <input className='border-2 border-black' type="number" name='quantity' value={productCredential.quantity} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        category:
                        <input className='border-2 border-black' type="text" name='category' value={productCredential.category} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <h1>Image Upload</h1>
                    <input className='mx-auto' type="file" name="image" accept="image/*" onChange={handleFileChange} />
                </div>
                <input type="submit" onClick={submit} />

            </form>
        </div>
    )
}

export default Product
