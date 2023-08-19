import React from 'react'
import Header from '../component/Header'
import Allitem from '../component/Allitem'
import ProductCard from '../component/ProductCard'
import CategoryButton from '../component/CategoryButton'
import BestsellingCard from '../component/BestsellingCard'

import image from '../image/header.jpg'
import banner from '../image/handbag.jpg'

function Shop() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Allitem />
            </div>
            <div className='flex gap-3 mx-5'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className='flex flex-col gap-5 my-5 mx-16'>
                <div className='flex justify-between'>
                    <div className='my-auto'>
                        <p className='text-3xl font-semibold '>Today For You</p>
                    </div>
                    <div className='flex gap-4'>
                        <CategoryButton />
                        <CategoryButton />
                        <CategoryButton />
                        <CategoryButton />
                        <CategoryButton />
                    </div>
                </div>
                <div className='flex gap-8'>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                 </div>
                <div className='flex gap-8'>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                 </div>
            </div>

            <section className='flex justify-center '>
                <div className='max-w-sm my-auto'>
                    <img className=' rounded-3xl ' src={banner} alt="" />
                </div>
                <div className='w-2/3 my-auto'>
                    <div className='flex mx-5 my-2 gap-4'><BestsellingCard/><BestsellingCard/></div>
                    <div className='flex mx-5 my-2 gap-4'><BestsellingCard/><BestsellingCard/></div>
                </div>
            </section>

        </div>
    )
}

export default Shop
