import React from 'react'
import image from '../image/dress2.jpeg'



function ProductProfile() {

    const options = [
        { 
          value: 1,
          label: "Leanne Graham"
        },
        {
          value:  2,
          label: "Ervin Howell"
        }
      ];

    return (
        <div className='flex ' >
            <div className='w-2/3 bg-yellow-400 p-5 '>
                <img className='mx-auto ' src={image} alt="" />
            </div>
            <div>
                <div className=' m-3 w-96 border-2 border-black'>
                    <p className='mx-2 pt-3 text-xl'>Heading</p>
                    <p className='mx-2 text-xl'>Rs. 2000.00</p>
                    <p className='mx-2 mt-4 text-xs'>Red/Checked</p>
                    <div className='flex gap-1 mx-2 my-1'>
                        <img className='w-10' src={image} alt="" />
                        <img className='w-10' src={image} alt="" />
                        <img className='w-10' src={image} alt="" />
                    </div>
                    <div className='bg-black mt-8 p-2 text-center'>
                        <p className='font-bold text-white'>Add</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductProfile
