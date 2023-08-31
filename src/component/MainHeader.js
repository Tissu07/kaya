import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../image/main.jpg'

function MainHeader() {
    return (
        <div>
            <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-white text-6xl font-bold text-center z-10 mb-4">Style your way</h1>
                    <Link to="shop" className='w-1/6 border-2 text-center mt-10 p-2 rounded-md border-white z-10 text-white hover:bg-pink-400 hover:border-transparent'>Shop Now</Link>
                </div>
            </header>
        </div>
    )
}

export default MainHeader
