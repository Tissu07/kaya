import React from 'react'


function Header(props) {
  const color={
    backgroundColor: props.color,
    color: props.text
  }
  return (
    <div>
      <section>
        <div className='flex flex-col md:flex-row ' style={color}>
            <div className='md:w-1/2 mx-auto md:my-auto md:mx-10 '>
                <p className='md:text-2xl md:font-semibold md:my-4'>#Big Fashion sale</p>
                <p className='md:text-5xl md:font-semibold'>Limited time offer</p>
                <p className='md:text-5xl md:font-semibold'>Upto 50% offer</p>
                <p className='md:text-2xl md:font-semibold md:my-4'>Redefine your everyday sale</p>
            </div>
            <div className='md:w-1/2'>
                <img  src={props.image}  alt="" />
            </div>
        </div>
      </section>



    </div>
  )
}

export default Header
