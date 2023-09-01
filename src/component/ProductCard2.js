import React from 'react'

function ProductCard2(props) {
  return (
    <div>
        <div className='border-2  w-56 mt-2'>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div className=''>
                <p className='font-bold'>{props.heading}</p>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard2
