// import React, { useContext, useState } from 'react'
// import flower from '../image/flower.jpeg'
// import mainContext from '../Context/mainContext'
// import Cart from './Cart';

// function ProductLargePage() {

//     const context = useContext(mainContext)
//     const { productProfile,addCart,fetchCartProductsDetails,cart,cartProduct,getCartDetail,currentImage } = context;

//     const [showCart, setShowCart] = useState(false)
    
//     const handleCart = () =>{
//         if(showCart){
//             setShowCart(false)
//         }
//         else{
//             setShowCart(true)
//             addCart(productProfile._id,2)
//             getCartDetail()
//             fetchCartProductsDetails(cart)
//         }
//     }

//     return (
//         <div>
//             <div className='flex justify-center mt-10'>

//                 <div className=' w-1/3'>

//                     <div className='w-full  '><img className='w-[70%] m-auto' src={`http://localhost:5000/api/uploadImage/${currentImage}`} alt="" /></div>
//                     <div className='py-4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iusto.</p></div>

//                 </div>
//                 <div className=' w-1/4 mx-10'>
//                     <div><p className='text-3xl'>{productProfile.name}</p></div>
//                     <div><p className='text-xl py-2'>Rs.{productProfile.price}</p></div>
//                     <div className='h-10 bg-blue-500 mt-10'><p className='text-center text-lg py-1 text-white cursor-pointer' onClick={handleCart}>Add to cart</p></div>
//                     <div className='mt-8'><p className='text-2xl'>heading</p></div>
//                     <div className='mt-1'><p>{productProfile.description}</p></div>
//                 </div>
//             </div>

//             {showCart && <div> <Cart/></div>}

//         </div>
//     )
// }

// export default ProductLargePage


// import React, { useContext, useState } from 'react';
// import flower from '../image/flower.jpeg';
// import mainContext from '../Context/mainContext';
// import Cart from './Cart';

// function ProductLargePage() {
//     const context = useContext(mainContext);
//     const { productProfile, addCart, fetchCartProductsDetails, cart, cartProduct, getCartDetail, currentImage } = context;

//     const [showCart, setShowCart] = useState(false);

//     const handleCart = () => {
//         if (showCart) {
//             setShowCart(false);
//         } else {
//             setShowCart(true);
//             addCart(productProfile._id, 2);
//             getCartDetail();
//             fetchCartProductsDetails(cart);
//         }
//     };

//     return (
//         <div className="lg:flex justify-center mt-10">
//             <div className="lg:w-1/3 w-full">
//                 <div className="w-full">
//                     <img className="w-[70%] m-auto" src={`http://localhost:5000/api/uploadImage/${currentImage}`} alt="" />
//                 </div>
                
//             </div>

//             <div className="lg:w-1/4 w-full  lg:mx-10 mt-6 lg:mt-0">
//                 <div className='mx-4'>
//                     <p className="text-2xl lg:text-3xl">{productProfile.name}</p>
//                 </div>
//                 <div className='mx-4'>
//                     <p className="text-lg lg:text-xl py-2">Rs.{productProfile.price}</p>
//                 </div>
//                 <div className="h-10 bg-blue-500 mt-4 lg:mt-10 w-2/3 mx-auto ">
//                     <p className="text-center text-lg py-2   text-white cursor-pointer" onClick={handleCart}>
//                         Add to cart
//                     </p>
//                 </div>
//                 <div className="mt-4 lg:mt-8 mx-4">
//                     <p className="text-xl lg:text-2xl">Description</p>
//                 </div>
//                 <div className="mt-1 mx-4">
//                     <p>{productProfile.description}</p>
//                 </div>
//             </div>

//             {showCart && (
//                 <div className="lg:w-1/4 w-full mt-6 lg:mt-0">
//                     Added to cart Successfully
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProductLargePage;


import React, { useContext, useState } from 'react';
import flower from '../image/flower.jpeg';
import mainContext from '../Context/mainContext';
import Cart from './Cart';

function ProductLargePage() {
    const context = useContext(mainContext);
    const { productProfile, addCart, fetchCartProductsDetails, cart, cartProduct, getCartDetail, currentImage } = context;

    const [showCart, setShowCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleCart = () => {
        if (showCart) {
            setShowCart(false);
        } else {
            setShowCart(true);
            addCart(productProfile._id, quantity);
            getCartDetail();
            fetchCartProductsDetails(cart);
        }
    };

    const handleQuantityChange = (amount) => {
        const newQuantity = Math.min(Math.max(quantity + amount, 1), 10); // Ensure quantity is between 1 and 10
        setQuantity(newQuantity);
    };

    return (
        <div className="lg:flex justify-center mt-10">
            <div className="lg:w-1/3 w-full">
                <div className="w-full">
                    <img className="w-[70%] m-auto" src={`http://localhost:5000/api/uploadImage/${currentImage}`} alt="" />
                </div>
            </div>

            <div className="lg:w-1/4 w-full lg:mx-10 mt-6 lg:mt-0">
                <div className='mx-4'>
                    <p className="text-2xl lg:text-3xl">{productProfile.name}</p>
                </div>
                <div className='mx-4'>
                    <p className="text-lg lg:text-xl py-2">Rs.{productProfile.price}</p>
                </div>
                <div className="flex items-center justify-center mt-4 lg:mt-10 w-2/3 mx-auto">
                    <button onClick={() => handleQuantityChange(-1)} className="bg-gray-300 px-3 py-1 text-lg">-</button>
                    <p className="mx-3 text-xl">{quantity}</p>
                    <button onClick={() => handleQuantityChange(1)} className="bg-gray-300 px-3 py-1 text-lg">+</button>
                </div>
                <div className="h-10 bg-blue-500 mt-4 lg:mt-10 w-2/3 mx-auto">
                    <p className="text-center text-lg py-2 text-white cursor-pointer" onClick={handleCart}>
                        Add to cart
                    </p>
                </div>
                <div className="mt-4 lg:mt-8 mx-4">
                    <p className="text-xl lg:text-2xl">Description</p>
                </div>
                <div className="mt-1 mx-4">
                    <p>{productProfile.description}</p>
                </div>
            </div>

            {showCart && (
                <div className="lg:w-1/4 w-full mt-6 lg:mt-0">
                    Added to cart Successfully
                </div>
            )}
        </div>
    );
}

export default ProductLargePage;
