import React, {useEffect, useState} from 'react'
import CategoryDropdown from './CategoryDropdown'

function CategoryNavbar() {
    

    const [dropDown, setDropDown] = useState('')

    const onMen = () =>{
        console.log("men")
        setDropDown("men")
    }
    const onWomen = () =>{
        setDropDown("women")
    }
    const onKid = () =>{
        setDropDown("kid")
    }
    const onDefault = () =>{
        setDropDown("")
    }

    return (
        <div className='border-2'>
            <div className='flex gap-8 border-2 w-1/2 mx-auto justify-center'>
                <div>
                    <p className='cursor-pointer' onMouseOver={onMen} onMouseOut={onDefault}>MEN</p>
                    {dropDown == "men"? <CategoryDropdown/>: ""}
                </div>
                <div>
                    <p className='cursor-pointer' onMouseOver={onWomen} onMouseOut={onDefault}>WOMEN</p>
                    {dropDown == "women"? <CategoryDropdown/>: ""}
                </div>
                <div>
                    <p className='cursor-pointer' onMouseOver={onKid} onMouseOut={onDefault}>KIDS</p>
                    {dropDown == "kid"? <CategoryDropdown/>: ""}
                </div>
            </div>
        </div>
    )
}

export default CategoryNavbar
