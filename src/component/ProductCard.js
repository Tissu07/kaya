import React from 'react'
import { Link } from 'react-router-dom'
import image from '../image/dress3.jpeg'

function ProductCard(props) {
  return (
    <div >
      <div className='rounded-3xl '>
        <div>
            <img className='w-80 h-80' src={image} alt="" /> 
        </div>
        <div className=''>
          <div className='py-1'>
    
            <p className='text-xl '>Heading</p>
            <p className='text-lg '>price</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
