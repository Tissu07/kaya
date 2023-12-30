import React from 'react'

function CartList(props) {
  return (
    <div>
      <div className='border-2  w-70 flex p-2 mx-3 my-1'>
        <div className=' border-2 w-16 mx-2'>
            <img   src= {`http://localhost:5000/api/uploadImage/${props.image}`} alt="" />
        </div>
        <div className=''>
            <p className='text-xl'>{props.heading}</p>
            <p className=''>{props.description}</p>
            <p className=''>{props.price}</p>
            <p className=''>{props.quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default CartList
