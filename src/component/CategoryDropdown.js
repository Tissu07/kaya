import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../Context/mainContext'

function CategoryDropdown(props) {
  const context = useContext(mainContext)
  const { setDropDownShow, dropDown, getProductByGender, productByGender } = context;

  const clothShow = (e) =>{
    getProductByGender(dropDown, e.target.innerText )
  }


  return (
    <div className='absolute top-[3.6rem] z-50' onMouseOver={setDropDownShow(true)} onMouseOut={setDropDownShow(false)}>
      <div className='w-40 h-40 bg-white text-center pt-10'>
        <ul>
          {props.data.map((male) => (
            <Link to="catalog"><li key={male._id} className='cursor-pointer hover:font-bold' onClick={clothShow}>{male.name}</li></Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoryDropdown
