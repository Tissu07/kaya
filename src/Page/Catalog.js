import React,{useContext,useEffect} from 'react'
import mainContext from '../Context/mainContext'
import ProductCard from '../component/ProductCard';

function Catalog() {
    const context = useContext(mainContext)
    const {productByGender,dropDown} = context;
   
    
    
  return (
    <div>
        {productByGender.map((each) => (
            <ProductCard />
        ))}    
    </div>
  )
}

export default Catalog
