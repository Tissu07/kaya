import React,{useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../Context/mainContext'

function ProductCard2(props) {
  const context = useContext(mainContext)
  const {getProductById,addCart,getCartDetail,fetchCartProductsDetails,cart,cartProduct} = context;



  const handleProductProfil = () =>{
    getProductById(props.id)
  }

  return (
    <Link to="ProductLarge"><div onClick={handleProductProfil}>
        <div className=' w-56 mt-2'>
            <div>
                <img src={`http://localhost:5000/api/uploadImage/${props.image}`} alt="" />
            </div>
            <div className=''>
                <p className='font-bold'>{props.heading}</p>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </div>
    </div></Link>
  )
}

export default ProductCard2
