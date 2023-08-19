import React from 'react'
import image from '../image/header.jpg'

function ProductCard() {
  return (
    <div>
      <div className='rounded-3xl border-2'>
        <div>
            <img src={image} alt="" />
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className='text-center'>
            <p className='text-4xl my-2'>Heading</p>
            <p className='text-2xl my-2'>describtion</p>
            <p className='text-2xl my-2'>$ 99.99</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
