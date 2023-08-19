import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'





import kImage from '../image/letter-k (white).png'
import heroImage from '../image/whereslugo-croTkGSyM64-unsplash (1).jpg'
import leviImage from '../image/levi.png'
import ckImage from '../image/ck.png'
import addidasImage from '../image/adidas.png'
import nickImage from '../image/nike.png'
import poloImage from '../image/pngwing.com (22).png'
import originalImage from '../image/original.png'
import rateImage from '../image/rate.png'
import newArivalImage from '../image/new-arrival.png'
import truckImage from '../image/truck.png'
import show1 from '../image/alireza-dolati-OVS3rqXq9gg-unsplash.jpg'
import show2 from '../image/austin-wade-d2s8NQ6WD24-unsplash.jpg'
import show3 from '../image/aiony-haust-IXYxqP4zejo-unsplash.jpg'
import show4 from '../image/sofia-3PgSkwoyIOM-unsplash.jpg'
import offer from '../image/christian-gertenbach-AqCVniFulhY-unsplash.jpg'
import facebook from '../image/facebook (2).png'
import twitter from '../image/twitter (2).png'
import instagram from '../image/instagram (3).png'
import pintress from '../image/pinterest-circular-logo-symbol (1).png'
import youtube from '../image/youtube (1).png'







function Home() {
  return (
    <div>
      <Navbar />


      <div class="hero -my-[20vw]">
        <div class="relative -top-[15vw]  sm:-top-[25vw] md:-top-[24vw]">
          <img src={heroImage} alt=""
            class=" z-0 w-full  bg-cover opacity-90  " />
        </div>

        <div class="heading absolute top-[40vw] flex flex-col left-[25vw]">
          <div class="drop-shadow-2xl  text-center  font-sans  text-white text-[8vw]">style your own</div>
          <p
            class=" hover:text-white hover:bg-gray-700 hover:border-2 cursor-pointer drop-shadow-2xl p-[3vw] border-2 mt-[8vw] text-center w-[30vw] m-auto rounded-xl text-white text-[4vw] sm:text-lg sm:w-3/5 sm:p-4 ">
            Shop Now</p>
        </div>
      </div>

      <div class="mx-4 mt-[10vw] sm:mt-[-12vw] ">

        <div>
          <h2 class="font-bold text-[5vw] text-center sm:text-start sm:text-3xl ">Brands</h2>
        </div>
        <div class="brand flex  justify-center mt-4">
          <img src={leviImage} alt="" class="h-[12vw] w-[9vw] mx-[5vw]" />
          <img src={ckImage} alt="" class="h-[12vw] w-[9vw] mx-[5vw]" />
          <img src={addidasImage} alt="" class="h-[12vw] w-[9vw] mx-[8vw]" />
          <img src={nickImage} alt="" class="h-[12vw] w-[9vw] mx-[5vw]" />
          <img src={poloImage} alt="" class="h-[12vw] w-[9vw] mx-[5vw]" />
        </div>
      </div>



      <div class="mt-[8vw] sm:mt-15">
        <div class="sm:flex justify-between">
          <p class=" text-center text-[6vw] sm:text-xl sm:mx-2 sm:px-4 sm:text-start sm:font-bold md:text-4xl">We provide best
            <br /> customer experiences
          </p>
          <div class="sm:border-l-4 ">
            <p class="hidden sm:block sm:text-sm sm:px-4 py-4 md:text-xl">Lorem ipsum consectetur Lorem consectetur Lorem
              ipsum dolor sit . </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-[4vw] sm:mt-16 sm:flex-row justify-center sm:m-3 sm:mx-4">

        <div class="flex flex-col  m-[2vw] p-[6vw] sm:m-2 sm:p-0 ">
          <div class="bg-gray-100 w-[30vw]  h-[25vw]  m-auto sm:w-16 sm:h-16 sm:m-1 rounded-xl">
            <img src={originalImage} alt="" class="w-[20vw] m-auto mt-[3vw] sm:w-28 sm:p-2 sm:mt-0 " />
          </div>
          <h1 class="text-center text-[5vw] mt-[2vw] font-bold sm:text-base sm:mt-0 sm:text-start">Original
            Products</h1>
          <p class="text-center text-[4vw] mt-[3vw] mx-[5vw] sm:mx-0 sm:mt-1 sm:text-sm  sm:text-start sm:pr-3">We
            provides money back garentee if the produnt
            are not original</p>
        </div>
        <div class="flex flex-col  m-[2vw] p-[6vw]    sm:m-2 sm:p-0 ">
          <div class="bg-gray-100 w-[30vw]  h-[25vw]  m-auto sm:w-16 sm:h-16 sm:m-1 rounded-xl">
            <img src={rateImage} alt="" class="w-[20vw] m-auto mt-[3vw] sm:w-28 sm:p-2 sm:mt-0 " />
          </div>
          <h1 class="text-center text-[5vw] mt-[2vw] font-bold sm:text-base sm:mt-0 sm:text-start">Customer
            Satisfaction</h1>
          <p class="text-center text-[4vw] mt-[3vw] mx-[5vw] sm:mx-0 sm:mt-1 sm:text-sm  sm:text-start sm:pr-3">Exchange the
            product you have purchased if it
            doesn't fit on you</p>
        </div>
        <div class="flex flex-col  m-[2vw] p-[6vw]    sm:m-2 sm:p-0 ">
          <div class="bg-gray-100 w-[30vw]  h-[25vw]  m-auto sm:w-16 sm:h-16 sm:m-1 rounded-xl">
            <img src={newArivalImage} alt="" class="w-[20vw] m-auto mt-[3vw] sm:w-28 sm:p-2 sm:mt-0 " />
          </div>
          <h1 class="text-center text-[5vw] mt-[2vw] font-bold sm:text-base sm:mt-0 sm:text-start">New Arrival</h1>
          <p class="text-center text-[4vw] mt-[3vw] mx-[5vw] sm:mx-0 sm:mt-1 sm:text-sm  sm:text-start sm:pr-3">We updates
            our collection almost everyday</p>
        </div>
        <div class="flex flex-col  m-[2vw] p-[6vw]    sm:m-2 sm:p-0 ">
          <div class="bg-gray-100 w-[30vw]  h-[25vw]  m-auto sm:w-16 sm:h-16 sm:m-1 rounded-xl">
            <img src={truckImage} alt="" class="w-[20vw] m-auto mt-[3vw] sm:w-28 sm:p-2 sm:mt-0 " />
          </div>
          <h1 class="text-center text-[5vw] mt-[2vw] font-bold sm:text-base sm:mt-0 sm:text-start">Fast & Free
            Shipping</h1>
          <p class="text-center text-[4vw] mt-[3vw] mx-[5vw] sm:mx-0 sm:mt-1 sm:text-sm  sm:text-start sm:pr-3">We offer fast
            and free shipping for our loyal
            customers</p>
        </div>
      </div>



      <div>
        <div>
          <h1 class="text-center text-[8vw] font-bold sm:text-2xl sm:mt-12 sm:text-start sm:mx-4">Currated Picks</h1>
        </div>



        <div class="flex   flex-col mt-[8vw] sm:mt-2 sm:flex-row sm:flex-wrap sm:mx-6 md:my-5 md:flex-row md:flex-wrap md:mx-6 ">

          <div class="relative m-auto mt-[4vw]  drop-shadow-2xl  ">
            <img src={show1} alt=""
              class="h-[80vw]  m-auto rounded-xl  object-scale-down sm:h-36 sm:mt-2 md:h-80 md:mt-2" />
            <Link to="BestSellerSection"><h2
              class="cursor-pointer absolute ,bottom-[9vw] h-[13vw] p-[3.2vw] left-[7vw] bg-gray-100 drop-shadow-xl w-[40vw] text-center rounded-lg text-[4vw]  sm:w-20 sm:h-8 sm:left-2 sm:bottom-3 sm:text-sm sm:p-1.5  md:w-36 md:left-8 md:bottom-5 md:text-lg md:p-3 md:h-14">
              Best Seller</h2></Link>
          </div>
          <div class="relative m-auto mt-[4vw]  drop-shadow-2xl  ">
            <img src={show2} alt=""
              class="h-[80vw]  m-auto rounded-xl  object-scale-down sm:h-36 sm:mt-2 md:h-80 md:mt-2" />
            <Link to="menSection"><h2
              class="cursor-pointer absolute bottom-[9vw] h-[13vw] p-[3.2vw] left-[7vw] bg-gray-100 drop-shadow-xl w-[40vw] text-center rounded-lg text-[4vw]  sm:w-20 sm:h-8 sm:left-2 sm:bottom-3 sm:text-sm sm:p-1.5  md:w-36 md:left-8 md:bottom-5 md:text-lg md:p-3 md:h-14">
              Men</h2></Link>
          </div>
          <div class="relative m-auto mt-[4vw]  drop-shadow-2xl  ">
            <img src={show3} alt=""
              class="h-[80vw]  m-auto rounded-xl  object-scale-down sm:h-36 sm:mt-2 md:h-80 md:mt-2" />
            <Link to="WomenSection"><h2
              class="cursor-pointer absolute bottom-[9vw] h-[13vw] p-[3.2vw] left-[7vw] bg-gray-100 drop-shadow-xl w-[40vw] text-center rounded-lg text-[4vw]  sm:w-20 sm:h-8 sm:left-2 sm:bottom-3 sm:text-sm sm:p-1.5  md:w-36 md:left-8 md:bottom-5 md:text-lg md:p-3 md:h-14">
              Women</h2></Link>
          </div>
          <div class="relative m-auto mt-[4vw]  drop-shadow-2xl  ">
            <img src={show4} alt=""
              class="h-[80vw]  m-auto rounded-xl  object-scale-down sm:h-36 sm:mt-2 md:h-80 md:mt-2" />
            <Link to="casualSection"><h2
              class="cursor-pointer absolute bottom-[9vw] h-[13vw] p-[3.2vw] left-[7vw] bg-gray-100 drop-shadow-xl w-[40vw] text-center rounded-lg text-[4vw]  sm:w-20 sm:h-8 sm:left-2 sm:bottom-3 sm:text-sm sm:p-1.5  md:w-36 md:left-8 md:bottom-5 md:text-lg md:p-3 md:h-14">
              casual</h2></Link>
          </div>
        </div>
      </div>





      <div class="mx-[3vw] my-[8vw] sm:mx-8 sm:my-20 sm:flex  justify-between bg-gray-800 rounded-xl  ">
        <div>
          <img src={offer} alt=""
            class=" rounded-t-lg sm:rounded-l-lg sm:rounded-r-none z-10 w-[94vw] sm:w-[20rem] md:w-[20rem] lg:w-[30rem]" />

        </div>


        <div class="flex flex-col rounded-xl z-0 sm:m-auto sm:p-2 ">
          <p class="text-white text-[4vw] text-center  p-[6vw] sm:text-base  sm:p-[0.13rem] md:text-2xl">LIMITED OFFER</p>
          <h2 class="text-white text-[6vw] font-bold text-center px-[4vw] sm:px-4  sm:text-xs  md:text-xl ">35% off only this
            friday and get special gift</h2>
          <p
            class="cursor-pointer text-black text-center p-[1vw] text-[5vw] w-[40vw] bg-gray-200 m-auto my-[9vw] h-[10vw] rounded-xl font-thin sm:p-2 sm:text-base sm:h-10 sm:w-28 sm:my-1">
            Grab it Now</p>
        </div>

      </div>







      <footer class="bg-gray-300 mt-[10vw] p-[1vw] sm:mt-10 sm:py-10">


        <div class="flex flex-col my-[2vw] mx-[8vw] sm:my-2 sm:mx-8 ">
          <p class="m-[3vw] text-[5vw] sm:m-3 sm:text-lg md:text-xl cursor-pointer">SHOP</p>
          <p class="m-[2vw] text-[5vw] sm:m-3 sm:text-lg md:text-xl cursor-pointer">CORPORATE INFO</p>
          <p class="m-[2vw] text-[5vw] sm:m-3 sm:text-lg md:text-xl cursor-pointer">HELP</p>
        </div>
        <div class=" text-center text-[4vw] mt-[6vw] sm:text-xl sm:mt-6 sm:px-3">
          Sign up now and be first to know about exclusive offers, latest fashion news & style tips!
        </div>
        <div
          class="mt-[4.5vw] mb-[5vw] mx-[10vw] flex justify-between text-[5vw] sm:mt-10 sm:mb-5 sm:mx-10 sm:text-2xl">
          <p className='cursor-pointer'>Read more</p>
          <p>&rarr;</p>
        </div>
        <div class="flex justify-center mt-[8vw] sm:mt-8">
          <img src={facebook} alt="" class="mx-[4vw] w-[5vw] sm:mx-4  object-scale-down sm:w-8 cursor-pointer" />
          <img src={twitter} alt="" class="mx-[4vw] w-[5vw] sm:mx-4  object-scale-down sm:w-8 cursor-pointer" />
          <img src={instagram} alt="" class="mx-[4vw] w-[5vw] sm:mx-4  object-scale-down sm:w-8 cursor-pointer" />
          <img src={youtube} alt="" class="mx-[4vw] w-[5vw] sm:mx-4 object-scale-down sm:w-8  cursor-pointer" />
          <img src={pintress} alt=""
            class="mx-[4vw] w-[5vw] sm:mx-4 sm:w-8 object-scale-down " />
        </div>
        <div class=" text-center text-[3vw] m-[6vw] sm:m-6 sm:text-xl ">
          The content of this site is copyright-protected and is property of Kayas.
        </div>
        <div class="flex justify-center">
          <img src={kImage} alt="" class="w-[8vw] m=[4vw]  sm:w-16 sm:m-1" />
        </div>
      </footer>

    </div>
  )
}

export default Home