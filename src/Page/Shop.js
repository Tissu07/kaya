// import React, { useContext, useEffect } from 'react'
// import mainContext from '../Context/mainContext'

// import Header from '../component/Header'
// import Allitem from '../component/Allitem'
// import ProductCard from '../component/ProductCard'
// import CategoryButton from '../component/CategoryButton'
// import BestsellingCard from '../component/BestsellingCard'

// import image from '../image/header.jpg'
// import banner from '../image/handbag.jpg'
// import Footer from '../component/Footer'
// import Navbar from '../component/Navbar'
// import header1 from '../image/header.jpg'
// import header2 from '../image/header2.jpg'
// import header3 from '../image/header3.jpg'
// import header4 from '../image/header4.jpg'

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// import Carousel2 from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import CategoryDropdown from '../component/CategoryDropdown'
// import CategoryNavbar from '../component/CategoryNavbar'

// function Shop(props) {

//     const context = useContext(mainContext)
//     const {dropDownShow, getGenderCategoryMale, getGenderCategoryFemale, getGenderCategoryKid, dropDown,cart,fetchCartProductsDetails,setDropDownShow } = context;

//     useEffect(() => {
//         getGenderCategoryMale();
//         getGenderCategoryFemale();
//         getGenderCategoryKid();
//         fetchCartProductsDetails(cart)
//         setDropDownShow(false)
//         console.log(dropDownShow)
//         localStorage.setItem('gender','')
//         localStorage.setItem('category','')
//         localStorage.setItem('list','')
//     }, [])

//     const responsive = {
//         superLargeDesktop: {
//             // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 4
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };
//     return (
//         <div >
        
//             <CategoryNavbar />

//             <Carousel autoPlay={true} interval={5000} infiniteLoop={true} className='z-0 mt-10'>
//                 <Header image={header1} color='lightgrey' />
//                 <Header image={header2} color='black' text='white' />
//                 <Header image={header3} color='grey' />
//                 <Header image={header4} color='wheat' />

//             </Carousel>



//             <div>
//                 <Allitem />
//             </div>

//             {/* <div className='flex gap-3 mx-5 mt-10'>
//                 <ProductCard />
//                 <ProductCard />
//                 <ProductCard />
//                 <ProductCard />
//             </div> */}

//             <section className='bg-pink-50 pt-10'>
//                 <Carousel2
//                     swipeable={false}
//                     draggable={false}
//                     showDots={true}
//                     responsive={responsive}
//                     ssr={true}
//                     infinite={true}
//                     keyBoardControl={true}
//                     containerClass="carousel-container"
//                     dotListClass="custom-dot-list-style"
//                     className='m-10'>
//                     <div className='mx-3'><ProductCard /></div>
//                     <div className='mx-3'><ProductCard /></div>
//                     <div className='mx-3'><ProductCard /></div>
//                     <div className='mx-3'><ProductCard /></div>
//                     <div className='mx-3'><ProductCard /></div>
//                     <div className='mx-3'><ProductCard /></div>
//                     <div className='mx-3'><ProductCard /></div>
//                     <div className='mx-2 mb-8'><ProductCard /></div>
//                 </Carousel2>;

//             </section>



//             <div className='flex flex-col gap-5 my-5 mx-16 mt-16'>
//                 <div className='flex justify-between'>
//                     <div className='my-auto'>
//                         <p className='text-3xl font-semibold '>Today For You!</p>
//                     </div>
//                     <div className='flex gap-4'>
//                         <CategoryButton heading="Best Selling" />
//                         <CategoryButton heading="keep Styling" />
//                         <CategoryButton heading="Special Discount" />
//                         <CategoryButton heading="Official Store" />
//                         <CategoryButton heading="coveted Product" />
//                     </div>
//                 </div>
//                 <div className='flex gap-8'>
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                 </div>
//                 <div className='flex gap-8'>
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                 </div>
//             </div>

//             <div>
//                 <p className='text-3xl text-center mt-16 mb-6'>Best Selling Store</p>
//             </div>

//             <section className='flex justify-center '>
//                 <div className='max-w-sm my-auto'>
//                     <img className=' rounded-3xl ' src={banner} alt="" />
//                 </div>
//                 <div className='w-2/3 my-auto'>
//                     <div className='flex mx-5 my-2 gap-4'>
//                         <BestsellingCard />
//                         <BestsellingCard />
//                     </div>
//                     <div className='flex mx-5 my-2 gap-4'>
//                         <BestsellingCard />
//                         <BestsellingCard />
//                     </div>
//                 </div>
//             </section>

//             <Footer />

//         </div>
//     )
// }

// export default Shop


import React, { useContext, useEffect } from 'react';
import mainContext from '../Context/mainContext';

import Header from '../component/Header';
import Allitem from '../component/Allitem';
import ProductCard from '../component/ProductCard';
import CategoryButton from '../component/CategoryButton';
import BestsellingCard from '../component/BestsellingCard';

import image from '../image/header.jpg';
import banner from '../image/handbag.jpg';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import header1 from '../image/header.jpg';
import header2 from '../image/header2.jpg';
import header3 from '../image/header3.jpg';
import header4 from '../image/header4.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryDropdown from '../component/CategoryDropdown';
import CategoryNavbar from '../component/CategoryNavbar';
import ProductCard2 from '../component/ProductCard2';

function Shop(props) {
    const context = useContext(mainContext);
    const {
        dropDownShow,
        getGenderCategoryMale,
        getGenderCategoryFemale,
        getGenderCategoryKid,
        dropDown,
        cart,
        fetchCartProductsDetails,
        setDropDownShow,
    } = context;

    useEffect(() => {
        getGenderCategoryMale();
        getGenderCategoryFemale();
        getGenderCategoryKid();
        fetchCartProductsDetails(cart);
        setDropDownShow(false);
        console.log(dropDownShow);
        localStorage.setItem('gender', '');
        localStorage.setItem('category', '');
        localStorage.setItem('list', '');
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div>

           






























            <div className=''>
            <CategoryNavbar />

            </div>

            <Carousel autoPlay={true} interval={5000} infiniteLoop={true} className='hidden lg:block z-0 mt-10'>
                <Header image={header1} color='lightgrey' />
                <Header image={header2} color='black' text='white' />
                <Header image={header3} color='grey' />
                <Header image={header4} color='wheat' />
            </Carousel>

            <div className='hidden xl:block'>
                <Allitem />
            </div>

            <section className='hidden xl:block bg-pink-50 pt-10'>
                <Carousel2
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    containerClass='carousel-container'
                    dotListClass='custom-dot-list-style'
                    className='m-10'>
                    <div className='mx-3'>
                        <ProductCard />
                    </div>
                    <div className='mx-3'>
                        <ProductCard />
                    </div>
                    <div className='mx-3'>
                        <ProductCard />
                    </div>
                    <div className='mx-3'>
                        <ProductCard />
                    </div>
                    <div className='mx-3'>
                        <ProductCard />
                    </div>
                    <div className='mx-3'>
                        <ProductCard />
                    </div>
                    <div className='mx-3'>
                        <ProductCard />
                    </div>
                    <div className='mx-2 mb-8'>
                        <ProductCard />
                    </div>
                </Carousel2>
            </section>

            <div className='hidden xl:flex flex-col gap-5 my-5 mx-5 mt-16'>
                <div className='flex justify-between'>
                    <div className='my-auto'>
                        <p className='text-3xl font-semibold '>Today For You!</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <CategoryButton heading='Best Selling' />
                        <CategoryButton heading='keep Styling' />
                        <CategoryButton heading='Special Discount' />
                        <CategoryButton heading='Official Store' />
                        <CategoryButton heading='coveted Product' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <div>
                <p className='hidden lg:block text-3xl text-center mt-16 mb-6'>Best Selling Store</p>
            </div>

            <section className='hidden lg:flex flex-col md:flex-row justify-center'>
                <div className='max-w-sm my-auto'>
                    <img className='rounded-3xl' src={banner} alt='' />
                </div>
                <div className='w-2/3 my-auto'>
                    <div className='flex flex-col md:flex-row mx-5 my-2 gap-4'>
                        <BestsellingCard />
                        <BestsellingCard />
                    </div>
                    <div className='flex flex-col md:flex-row mx-5 my-2 gap-4'>
                        <BestsellingCard />
                        <BestsellingCard />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Shop;
