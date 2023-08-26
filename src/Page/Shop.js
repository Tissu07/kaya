import React from 'react'
import Header from '../component/Header'
import Allitem from '../component/Allitem'
import ProductCard from '../component/ProductCard'
import CategoryButton from '../component/CategoryButton'
import BestsellingCard from '../component/BestsellingCard'

import image from '../image/header.jpg'
import banner from '../image/handbag.jpg'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import header1 from '../image/header.jpg'
import header2 from '../image/header2.jpg'
import header3 from '../image/header3.jpg'
import header4 from '../image/header4.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Shop(props) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>

            <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>
                <Header image={header1} color='white' />
                <Header image={header2} color='black' text='white' />
                <Header image={header3} color='grey' />
                <Header image={header4} color='white' />

            </Carousel>

            <div>
                <Allitem />
            </div>

            {/* <div className='flex gap-3 mx-5 mt-10'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div> */}

            <section className='bg-yellow-50 pt-10'>
                <Carousel2
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    className='m-10'>
                    <div className='mx-3'><ProductCard /></div>
                    <div className='mx-3'><ProductCard /></div>
                    <div className='mx-3'><ProductCard /></div>
                    <div className='mx-3'><ProductCard /></div>
                    <div className='mx-3'><ProductCard /></div>
                    <div className='mx-3'><ProductCard /></div>
                    <div className='mx-3'><ProductCard /></div>
                    <div className='mx-2 mb-8'><ProductCard /></div>
                </Carousel2>;

            </section>



            <div className='flex flex-col gap-5 my-5 mx-16 mt-16'>
                <div className='flex justify-between'>
                    <div className='my-auto'>
                        <p className='text-3xl font-semibold '>Today For You!</p>
                    </div>
                    <div className='flex gap-4'>
                        <CategoryButton heading="Best Selling" />
                        <CategoryButton heading="keep Styling" />
                        <CategoryButton heading="Special Discount" />
                        <CategoryButton heading="Official Store" />
                        <CategoryButton heading="coveted Product" />
                    </div>
                </div>
                <div className='flex gap-8'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className='flex gap-8'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <div>
                <p className='text-3xl text-center mt-16 mb-6'>Best Selling Store</p>
            </div>

            <section className='flex justify-center '>
                <div className='max-w-sm my-auto'>
                    <img className=' rounded-3xl ' src={banner} alt="" />
                </div>
                <div className='w-2/3 my-auto'>
                    <div className='flex mx-5 my-2 gap-4'>
                        <BestsellingCard />
                        <BestsellingCard />
                    </div>
                    <div className='flex mx-5 my-2 gap-4'>
                        <BestsellingCard />
                        <BestsellingCard />
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Shop
