import React from 'react'
import { Link } from 'react-router-dom'

import kImage from '../image/letter-k (white).png'
import cartImage from '../image/shopping-cart (1).png'
import userImage from '../image/user (1).png'

function Navbar() {
  return (
    <div>
      <nav class="sm:flex  z-50 absolute top-0 w-full justify-between md:mt-9">
        <div class=" top-0  ml-[2vw]  drop-shadow-lg sm:relative sm:mx-2 ">

          <Link to="/"><img src={kImage} alt=""
            class="w-[10vw] sm:w-14  mt-[4vw] md:mt-[1vw] md:w-20 cursor-pointer" /></Link>
        </div>
        <ul class="hidden sm:flex sm:text-base font-bold text-white sm:mx-2  sm:m-1 md:text-base">
          <Link to="shop"><li class="drop-shadow-2xl text-center sm:py-8 sm:mx-0.5 sm:p-3   md:ml-10   cursor-pointer  hover:text-gray-400 ">Shop</li></Link>
          <Link to="mostWant"><li class="drop-shadow-2xl text-center sm:py-8 sm:mx-0.5 sm:w-28  md:w-38 md:mx-3 cursor-pointer hover:text-gray-400">Most Wanted</li></Link>
          <Link to="newArriaval"><li class="drop-shadow-2xl text-center sm:py-8 sm:mx-0.5  sm:w-24 md:w-38 md:mx-3 cursor-pointer hover:text-gray-400" >New arrival</li></Link>
          <Link to="brands"><li class="drop-shadow-2xl text-center sm:py-8 sm:mx-0.5 sm:p-3    cursor-pointer  hover:text-gray-400 ">Brands</li></Link>
        </ul>
        <ul class="hidden md:flex justify-center">
          <div className="flex items-center px-10">
            <input
              type="text"
              placeholder="Search for products..."
              className="px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Search
            </button>
          </div>
          <Link to='/cart' className='md:mt-8'><img src={cartImage} alt=" " class="object-scale-down w-8 md:mx-2 cursor-pointer" /></Link>
          <Link to="/user" className='md:mt-8'><img src={userImage} alt="" class="object-scale-down w-8 md:mx-2 cursor-pointer" /></Link>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
