import React from 'react'

function CategoryButton(props) {

    const buttonClick = () => {

    } 
  return (
    <div onClick={buttonClick}>
      <div className='border-2 border-black text-center rounded-md px-3 py-1 my-2 cursor-pointer'>
        <p className='font-semibold text-lg'>{props.heading}</p>
      </div>
    </div>
  )
}

export default CategoryButton
