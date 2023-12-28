import React, { useContext, useState } from 'react'
import flower from '../image/flower.jpeg'
import mainContext from '../Context/mainContext'
import Cart from './Cart';

function ProductLargePage() {

    const context = useContext(mainContext)
    const { productProfile,addCart,fetchCartProductsDetails,cart,cartProduct,getCartDetail,currentImage } = context;

    const [showCart, setShowCart] = useState(false)
    
    const handleCart = () =>{
        if(showCart){
            setShowCart(false)
        }
        else{
            setShowCart(true)
            addCart(productProfile._id,2)
            getCartDetail()
            fetchCartProductsDetails(cart)
        }
    }

    return (
        <div>
            <div className='flex justify-center mt-10'>

                <div className=' w-1/3'>

                    <div className='w-full border-2 '><img className='w-[70%] m-auto' src={`http://localhost:5000/api/uploadImage/${currentImage}`} alt="" /></div>
                    <div className='py-4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iusto.</p></div>

                </div>
                <div className=' w-1/4 mx-10'>
                    <div><p className='text-3xl'>{productProfile.name}</p></div>
                    <div><p className='text-xl py-2'>Rs.{productProfile.price}</p></div>
                    <div className='h-10 bg-blue-500 mt-10'><p className='text-center text-lg py-1 text-white cursor-pointer' onClick={handleCart}>Add to cart</p></div>
                    <div className='mt-8'><p className='text-2xl'>heading</p></div>
                    <div className='mt-1'><p>{productProfile.description}</p></div>
                </div>
            </div>

            {showCart && <div> <Cart/></div>}

        </div>
    )
}

export default ProductLargePage
