// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import mainContext from '../Context/mainContext';
// import UploadImage from './UploadImage';

// const ProductUpload = () => {
//     const context = useContext(mainContext);
//     const {
//         genderCategoryMale,
//         genderCategoryFemale,
//         genderCategoryKid,
//         getGenderCategoryMale,
//         getGenderCategoryFemale,
//         getGenderCategoryKid,
//         uploadedImage,
//         addProduct
//     } = context;

//     const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         price: 0,
//         stockQuantity: 0,
//         // image: null,
//         categories: '',
       
//     });

//     const [selectedGender, setSelectedGender] = useState('male'); // Default to 'male', or set your default gender
//     const [genderCategoryOptions, setGenderCategoryOptions] = useState([]);


//     useEffect(() => {
//         getGenderCategoryMale()
//         getGenderCategoryFemale()
//         getGenderCategoryKid()
//     }, [])

//     useEffect(() => {
//         const fetchCategoryOptions = async () => {
//             try {
//                 let response;
//                 if (selectedGender === 'male') {
//                     response = genderCategoryMale;
//                 } else if (selectedGender === 'female') {
//                     response = genderCategoryFemale;
//                 } else if (selectedGender === 'kid') {
//                     response = genderCategoryKid;
//                 }
//                 setGenderCategoryOptions(response);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//             }
//         };

//         fetchCategoryOptions();
//     }, [selectedGender]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         const processedValue = name === 'price' || name === 'stockQuantity' ? parseFloat(value) : value;

//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             [name]: processedValue,
//         }));

//     };


//     const submitForm = async (e) => {
//         e.preventDefault();

//         // try {
//         //     const formData = new FormData();
//         //     formData.append('name', product.name);
//         //     formData.append('description', product.description);
//         //     formData.append('price', String(product.price)); 
//         //     formData.append('stockQuantity', String(product.stockQuantity)); 
//         //     formData.append('categoryName', product.categories);
//         //     formData.append('image', uploadedImage);

//         //     // console.log(formData.getAll("categoryName"))
//         //     // console.log(product.categories)
//         //     console.log(...formData)
            
//         //     try{
//         //         addProduct(formData, selectedGender);
//         //     }
//         //     catch(err){
//         //         console.log("not added in database")
//         //     }
//         // } catch (error) {
//         //     console.error('Error:', error);
//         // }

//         try{
//             addProduct(product.name,product.description,product.price,product.stockQuantity,product.categories,uploadedImage,selectedGender)
//         }
//         catch(err){
//             console.log("Error in adding product in database")
//         }
//     };


//     return (
//         <div>
//             <h1>Product Upload Form</h1>
//             <form encType="multipart/form-data">
//                 <label htmlFor="name">Product Name:</label>
//                 <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} required /><br />

//                 <label htmlFor="description">Description:</label>
//                 <textarea id="description" name="description" value={product.description} onChange={handleInputChange} required></textarea><br />

//                 <label htmlFor="price">Price:</label>
//                 <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} required /><br />

//                 <label htmlFor="stockQuantity">Stock Quantity:</label>
//                 <input type="number" id="stockQuantity" name="stockQuantity" value={product.stockQuantity} onChange={handleInputChange} required /><br />

//                 {/* <label htmlFor="image">Product Image:</label>
//                 <input type="file" id="image" name="image" accept="image/*" onChange={handleInputChange} required /><br /> */}

//                 <UploadImage />

//                 <label htmlFor="gender">Select Gender:</label>
//                 <select
//                     id="gender"
//                     name="gender"
//                     value={selectedGender}
//                     onChange={(e) => setSelectedGender(e.target.value)}
//                 >
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="kid">Kid</option>
//                 </select>
//                 <br />

//                 <label htmlFor="categories">Category:</label>
//                 <select
//                     id="categories"
//                     name="categories"
//                     value={product.categories}
//                     onChange={handleInputChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select a category
//                     </option>
//                     {genderCategoryOptions.map((category) => (
//                         <option key={category._id} value={category.name}>
//                             {category.name}
//                         </option>
//                     ))}
//                 </select>
//                 <br />

//                 <button type="button" onClick={submitForm}>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ProductUpload;


import React, { useState, useContext, useEffect } from 'react';
import mainContext from '../Context/mainContext';
import UploadImage from './UploadImage';

const ProductUpload = () => {
    const context = useContext(mainContext);
    const {
        genderCategoryMale,
        genderCategoryFemale,
        genderCategoryKid,
        getGenderCategoryMale,
        getGenderCategoryFemale,
        getGenderCategoryKid,
        uploadedImage,
        addProduct
    } = context;

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        stockQuantity: 0,
        categories: '',
    });

    const [selectedGender, setSelectedGender] = useState('male');
    const [genderCategoryOptions, setGenderCategoryOptions] = useState([]);

    useEffect(() => {
        getGenderCategoryMale();
        getGenderCategoryFemale();
        getGenderCategoryKid();
    }, []);

    useEffect(() => {
        const fetchCategoryOptions = async () => {
            try {
                let response;
                if (selectedGender === 'male') {
                    response = genderCategoryMale;
                } else if (selectedGender === 'female') {
                    response = genderCategoryFemale;
                } else if (selectedGender === 'kid') {
                    response = genderCategoryKid;
                }
                setGenderCategoryOptions(response);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategoryOptions();
    }, [selectedGender]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const processedValue = name === 'price' || name === 'stockQuantity' ? parseFloat(value) : value;

        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: processedValue,
        }));
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            addProduct(product.name, product.description, product.price, product.stockQuantity, product.categories, uploadedImage, selectedGender);
        } catch (err) {
            console.log('Error in adding product to the database');
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md">
            <h1 className="text-3xl font-bold mb-4">Product Upload Form</h1>
            <form encType="multipart/form-data" className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Product Name:
                    </label>
                    <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" required />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description:
                    </label>
                    <textarea id="description" name="description" value={product.description} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" required></textarea>
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price:
                    </label>
                    <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" required />
                </div>

                <div>
                    <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">
                        Stock Quantity:
                    </label>
                    <input type="number" id="stockQuantity" name="stockQuantity" value={product.stockQuantity} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" required />
                </div>

                <UploadImage />

                <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Select Gender:
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={selectedGender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="kid">Kid</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
                        Category:
                    </label>
                    <select
                        id="categories"
                        name="categories"
                        value={product.categories}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="" disabled>
                            Select a category
                        </option>
                        {genderCategoryOptions.map((category) => (
                            <option key={category._id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="button" onClick={submitForm} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductUpload;
