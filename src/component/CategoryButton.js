import React from 'react'

function CategoryButton() {

    const buttonClick = () => {

    } 
  return (
    <div onClick={buttonClick}>
      <div className='border-2 border-black text-center rounded-md px-5 py-2 my-2'>
        <p className='font-semibold text-lg'>Best Seller</p>
      </div>
    </div>
  )
}

export default CategoryButton
