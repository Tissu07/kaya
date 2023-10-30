import React, { useContext } from 'react'
import flower from '../image/flower.jpeg'
import mainContext from '../Context/mainContext'

function ProductLargePage() {

    const context = useContext(mainContext)
    const { productProfile } = context;


    return (
        <div>
            <div className='flex justify-center mt-10'>

                <div className=' w-1/3'>

                    <div className='w-full border-2 h-96'><img className='w-full border-2 h-96' src={flower} alt="" /></div>
                    <div className='py-4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iusto.</p></div>

                </div>
                <div className=' w-1/4 mx-10'>
                    <p>{productProfile._id}</p>
                    <div><p className='text-3xl'>{productProfile.name}</p></div>
                    <div><p className='text-xl py-2'>{productProfile.price}</p></div>
                    <div className='h-10 bg-blue-500 mt-10'><p className='text-center text-lg py-1 text-white cursor-pointer'>Add to cart</p></div>
                    <div className='mt-8'><p className='text-2xl'>heading</p></div>
                    <div className='mt-1'><p>{productProfile.description}</p></div>
                </div>
            </div>

        </div>
    )
}

export default ProductLargePage
