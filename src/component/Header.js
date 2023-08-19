import React from 'react'
import header from '../image/header.jpg'

function Header() {
  return (
    <div>
      <section>
        <div className='flex flex-col md:flex-row bg-blue-100'>
            <div className='md:w-1/2 mx-auto md:my-auto md:mx-10'>
                <p className='md:text-2xl md:font-semibold md:my-4'>#Big Fashion sale</p>
                <p className='md:text-5xl md:font-semibold'>Limited time offer</p>
                <p className='md:text-5xl md:font-semibold'>Upto 50% offer</p>
                <p className='md:text-2xl md:font-semibold md:my-4'>Redefine your everyday sale</p>
            </div>
            <div className='md:w-1/2'>
                <img  src={header}  alt="" />
            </div>
        </div>
      </section>



    </div>
  )
}

export default Header
