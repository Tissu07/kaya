import React from 'react'
import image from '../image/header.jpg'

function BestsellingCard() {
    return (
        <div>
            <div className='border-2 rounded-3xl '>
                <div className='flex m-6'>
                    <div className='w-1/6 my-auto'><img className=' rounded-full' src={image} alt="" /></div>
                    <div className='my-auto'>
                        <div className=' mx-4 text-3xl'><p>Heading</p></div>
                        <div className=' mx-4 text-lg'><p>tag</p></div>
                    </div>
                </div>
                <div className='flex gap-4 mx-4'>
                    <div><img className='rounded-3xl' src={image} alt="" /><p className='text-center text-2xl my-2 font-semibold'>$40.00</p></div>
                    <div><img className='rounded-3xl' src={image} alt="" /><p className='text-center text-2xl my-2 font-semibold'>$40.00</p></div>
                    <div><img className='rounded-3xl' src={image} alt="" /><p className='text-center text-2xl my-2 font-semibold'>$40.00</p></div>
                </div>
            </div>
        </div>
    )
}

export default BestsellingCard
