import React from 'react'
import image from '../image/dress3.jpeg'

function ProductCard(props) {
  return (
    <div>
      <div className='rounded-3xl '>
        <div>
            <img className='rounded-t-3xl' src={image} alt="" />
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className='text-center bg-white rounded-b-3xl border-2'>
            <p className='text-2xl py-2'>{props.heading}</p>
            <p className='text-lg py-2'>{props.description}</p>
            <p className='text-lg py-2'>{props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
