import mainContext from "./mainContext";
import { useState } from "react";


const MainState = (props) => {
  const host = 'http://localhost:5000';
  const [genderCategoryMale, setGenderCategoryMale] = useState([])
  const [genderCategoryFemale, setGenderCategoryFemale] = useState([])
  const [genderCategoryKid, setGenderCategoryKid] = useState([])
  const [dropDownShow, setDropDownShow] = useState(false)
  const [dropDown, setDropDown] = useState('')
  const [productByGender, setProductByGender] = useState([])

  const getGenderCategoryMale = async () => {
    // API call 
    const response = await fetch(`${host}/api/categories/gender/male`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    setGenderCategoryMale(json);
    
  }
  const getGenderCategoryFemale = async () => {
    // API call 
    const response = await fetch(`${host}/api/categories/gender/female`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    setGenderCategoryFemale(json);
    
  }
  const getGenderCategoryKid = async () => {
    // API call 
    const response = await fetch(`${host}/api/categories/gender/kid`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    setGenderCategoryKid(json);
    
  }

  const getProductByGender = async (gender, category) => {
    // API call 
    const response = await fetch(`${host}/api/products/${gender}/${category}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    setProductByGender(json)    
  }

  
  return (
     <mainContext.Provider value={{genderCategoryMale, getGenderCategoryMale,genderCategoryFemale,genderCategoryKid, getGenderCategoryFemale, getGenderCategoryKid, dropDownShow, setDropDownShow,dropDown, setDropDown, getProductByGender, productByGender}}>
      {props.children}
    </mainContext.Provider>
  )
}

export default MainState;
