import mainContext from "./mainContext";
import { useState } from "react";


const MainState = (props) => {
  const host = 'http://localhost:5000';
  const [genderCategoryMale, setGenderCategoryMale] = useState([])

  const getGenderCategoryMale = async () => {
    // API call 
    const response = await fetch(`${host}/api/categories/gender/male`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    // console.log(json)
    setGenderCategoryMale(json);
    console.log(genderCategoryMale)
  }

  
  return (
     <mainContext.Provider value={{genderCategoryMale, getGenderCategoryMale }}>
      {props.children}
    </mainContext.Provider>
  )
}

export default MainState;
