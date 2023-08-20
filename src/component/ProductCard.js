import React from 'react'
import image from '../image/header.jpg'

function ProductCard() {
  return (
    <div>
      <div className='rounded-3xl border-2 '>
        <div>
            <img className='rounded-t-3xl' src={image} alt="" />
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className='text-center bg-white rounded-b-3xl'>
            <p className='text-2xl py-2'>Heading</p>
            <p className='text-lg py-2'>describtion</p>
            <p className='text-lg py-2'>$ 99.99</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
