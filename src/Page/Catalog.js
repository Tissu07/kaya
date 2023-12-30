import React, { useContext, useEffect, useState } from 'react'
import mainContext from '../Context/mainContext'
import ProductCard from '../component/ProductCard';
import ProductCard2 from '../component/ProductCard2';
import { Link } from 'react-router-dom'


function Catalog() {
  const context = useContext(mainContext)
  const { productByGender, dropDown, cart, getProductByGender, genderCategoryMale, genderCategoryFemale, genderCategoryKid, productByCategory, setDropDown } = context;
  const [list, setList] = useState([])






  useEffect(() => {
    let selectedCategory = [];

    if (dropDown === "male") {
      selectedCategory = genderCategoryMale;
      localStorage.setItem("list", JSON.stringify(genderCategoryMale))
    } else if (dropDown === "female") {
      selectedCategory = genderCategoryFemale;
      localStorage.setItem("list", JSON.stringify(genderCategoryFemale))
    } else if (dropDown === "kid") {
      selectedCategory = genderCategoryKid;
      localStorage.setItem("list", JSON.stringify(genderCategoryKid))
    }

    // Update the list state with the selected category
    setList(selectedCategory);






  }, [genderCategoryMale, genderCategoryFemale, genderCategoryKid]);

  useEffect(() => {
    getProductByGender(localStorage.getItem("gender"), localStorage.getItem("category"))
    if (localStorage.getItem('list')) {
      const storedList = localStorage.getItem("list");
      const parsedList = JSON.parse(storedList);
      setList(parsedList)
      console.log(dropDown)
    }

    if (localStorage.getItem('gender')) {
      setDropDown(localStorage.getItem('gender'))
    }


  }, [])


  const clothShow = (e) => {
    localStorage.setItem("gender", dropDown)
    console.log(dropDown)
    localStorage.setItem("category", e.target.innerText)
    getProductByGender(dropDown, e.target.innerText)
  }

  return (
    <div>
      <div className='flex mt-4'>
        <div className='w-1/5 border-r-2 m-2'>
          <div className='mb-5'>
            <p className='mr-2'>Categoty</p>
          </div>

          {list && list.map((each) => (
            <div className=' xl:w-64 xl:border-2 p-1 my-1 rounded-md' key={each._id}>
              <li className='cursor-pointer hover:font-bold list-none' onClick={clothShow}>{each.name}</li>
            </div>
          ))}

          {/* {localStorage.getItem('list') && parsedList.map((each) => (
          <div className=' w-64 border-2 p-1 my-1 rounded-md' key={each._id}>
            <li className='cursor-pointer hover:font-bold list-none' onClick={clothShow}>{each.name}</li>
          </div>
        ))} */}



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


