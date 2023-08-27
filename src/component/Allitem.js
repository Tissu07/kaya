import React from 'react'
import item from '../image/list (1).jpeg'
import item2 from '../image/list (2).jpeg'
import item3 from '../image/list (4).jpeg'
import item4 from '../image/list (5).jpeg'
import item5 from '../image/list (7).jpeg'
import item6 from '../image/list (10).jpeg'
import item7 from '../image/list (8).jpeg'
import item8 from '../image/list (9).jpeg'
import menu from '../image/menu.png'


function Allitem() {
    return (
        <div>
            <div className='hidden md:flex my-4 gap-4 justify-center md:w-5/6 lg:w-11/12  mx-auto py-5'>

                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item} alt="" />
                    </div>
                    <p className='text-sm text-center'>T-shirt</p>
                </div>
                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item2} alt="" />
                    </div>
                    <p className='text-sm text-center'>Jacket</p>
                </div>
                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item3} alt="" />
                    </div>
                    <p className='text-sm text-center'>Shirt</p>
                </div>
                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item4} alt="" />
                    </div>
                    <p className='text-sm text-center'>Jeans</p>
                </div>
                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item5} alt="" />
                    </div>
                    <p className='text-sm text-center'>Bag</p>
                </div>
                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item6} alt="" />
                    </div>
                    <p className='text-sm text-center'>Shoes</p>
                </div>
                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item7} alt="" />
                    </div>
                    <p className='text-sm text-center'>Watches</p>
                </div>
                <div className=' lg:mx-2 w-3/4 p-2'>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item8} alt="" />
                    </div>
                    <p className='text-sm text-center'>Cap</p>
                </div>
                <div className='  w-3/4 p-3 '>
                    <img className='rounded-full w-96 border-2 p-4 cursor-pointer' src={menu} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Allitem
