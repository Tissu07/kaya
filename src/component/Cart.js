import React, { useContext, useEffect, useState } from 'react'
import mainContext from '../Context/mainContext'
import CartList from './CartList';
function Cart() {
  const context = useContext(mainContext)
  const { cartProduct, cart, fetchCartProductsDetails } = context;
  const [amount,setAmount] = useState(0)

  useEffect(() => {
    fetchCartProductsDetails(cart)
    countTotalAmount()
  }, [])
  
  const countTotalAmount = () =>{
    let total = 0
    cartProduct.forEach((element) => {
      total = element.price + total
    });
    setAmount(total)
  }

  useEffect(()=>{
    fetchCartProductsDetails(cart)
    countTotalAmount()
  },[fetchCartProductsDetails,countTotalAmount])

  


  // const eachProductPrice = ()=> {
  //   let i = 0;
  //   while(cartProduct){
  //     console.log(cartProduct[i])
  //     i++;
  //   }
  // }

  // eachProductPrice()


  return (
    // <div className='absolute top-0 right-0 bg-white'>
    //   <div className='flex flex-col w-72 border-2 h-screen'>
    //     <div className='h-20 bg-blue-600 py-5'>
    //         <p className='text-center text-2xl text-white'>heading</p>
    //     </div>
    //     {/* <div className='border-2 h-[28rem] mt-4'>
    //         <p className='text-xl'>
    //         {cart.products[0].productId}
    //         </p>
    //     </div> */}
    //     <div className='h-[28rem]'>
    //     {/* <CartList heading="heading" price="price" /> */}
    //       {cartProduct.map((each) => (
    //         <div key={each._id}>
    //           <CartList heading={each.name} price={each.price} />
    //         </div>
    //       ))}
    //     </div>
    //     <div>
    //         <p className='text-3xl'>Price</p>
    //     </div>
    //     <div className='mt-14 h-10 bg-blue-500 mx-4 text-white' >
    //         <p className='text-center text-lg py-2 '>View Order</p>
    //     </div>
    //   </div>
    // </div>

    <div>
      <p className='text-3xl font-bold m-5'>Your Cart</p>
      <div className='w-full lg:w-1/2'>
        {cartProduct.map((each) => (
          <div key={each._id}>
            <CartList heading={each.name} price={each.price} image={each.image} description={each.description} quantity={each.quantity}/>
          </div>
        ))}
      </div>
      {/* <div>
        <p className='mx-5 text-xl'>Total Amount = Rs. {amount}</p>
      </div> */}
    </div>
  )
}

export default Cart
