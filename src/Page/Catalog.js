import React, { useContext, useEffect } from 'react'
import mainContext from '../Context/mainContext'
import ProductCard from '../component/ProductCard';
import ProductCard2 from '../component/ProductCard2';


function Catalog() {
  const context = useContext(mainContext)
  const { productByGender, dropdown,cart } = context;



  return (
    <div>
      <div className='flex mt-4'>
        <div className='w-1/5 border-r-2 m-2'>

          Categoty
          
        </div>
        <div className='flex flex-wrap w-5/6  pl-4'>
          {productByGender.map((each) => (
            <div className=' w-64 ' key={each._id}>
              <ProductCard2 image={each.image} heading={each.name} description={each.description} price={each.price} id={each._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
