import React, {useEffect, useState, useContext} from 'react'
import CategoryDropdown from './CategoryDropdown'
import mainContext from '../Context/mainContext'


function CategoryNavbar(props) {
    
    const context = useContext(mainContext)
    const {genderCategoryMale, genderCategoryFemale, genderCategoryKid, dropDownShow, setDropDownShow,dropDown, setDropDown } = context;
    
    const onMen = () =>{
        setDropDown("male")
    }
    const onWomen = () =>{
        setDropDown("female")
    }
    const onKid = () =>{
        setDropDown("kid")
    }
    const onDefault = () =>{
        setDropDown("")
    }

    

    return (
        <div className='shadow-md  '>
            <div className='flex gap-8  w-1/2 mx-auto justify-center pt-4'>
                <div onMouseOver={onMen} onMouseOut={onDefault} className=' pb-4 cursor-pointer'>
                    <p className='cursor-pointer' >MEN</p>
                    {dropDown == "male" || dropDownShow? (<CategoryDropdown data={genderCategoryMale}/>): ("")}
                </div>
                <div onMouseOver={onWomen} onMouseOut={onDefault} className=' pb-4'>
                    <p className='cursor-pointer' >WOMEN</p>
                    {dropDown == "female"? <CategoryDropdown data={genderCategoryFemale}/>: ""}
                </div>
                <div onMouseOver={onKid} onMouseOut={onDefault} className=' pb-4'>
                    <p className='cursor-pointer' onMouseOver={onKid} onMouseOut={onDefault}>KIDS</p>
                    {dropDown == "kid"? <CategoryDropdown data={genderCategoryKid}/>: ""}
                </div>
            </div>
        </div>
    )
}

export default CategoryNavbar
