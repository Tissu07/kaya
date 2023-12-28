import React, { useContext, useEffect, useState } from 'react'
import mainContext from '../Context/mainContext'
import ProductCard from '../component/ProductCard';
import ProductCard2 from '../component/ProductCard2';
import { Link } from 'react-router-dom'


function Catalog() {
  const context = useContext(mainContext)
  const { productByGender, dropDown, cart,getProductByGender, genderCategoryMale,genderCategoryFemale,genderCategoryKid,productByCategory} = context;
  const [list,setList] = useState([])
  // useEffect(() => {
  //   if(dropDown==="male"){
  //     console.log(genderCategoryMale)
      
  //   }
  //   if(dropDown==="female"){
  //     console.log(genderCategoryFemale)
    
  //   }
  //   if(dropDown==="kid"){
  //     console.log(genderCategoryKid)
      
  //   }

  //   console.log(list)
    
  // }, [])

  

  

  useEffect(() => {
    let selectedCategory = [];

    if (dropDown === "male") {
      selectedCategory = genderCategoryMale;
    } else if (dropDown === "female") {
      selectedCategory = genderCategoryFemale;
    } else if (dropDown === "kid") {
      selectedCategory = genderCategoryKid;
    }

    // Update the list state with the selected category
    setList(selectedCategory);

    console.log(list);
    
  }, [dropDown, genderCategoryMale, genderCategoryFemale, genderCategoryKid]);


  const clothShow = (e) =>{
    getProductByGender(dropDown, e.target.innerText )
  }

  return (
    <div>
      <div className='flex mt-4'>
        <div className='w-1/5 border-r-2 m-2'>

          Categoty
          {list && list.map((each) => (
            <div className=' w-64 '>
             <li key={each._id} className='cursor-pointer hover:font-bold' onClick={clothShow}>{each.name}</li>
            </div>
          ))}



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
