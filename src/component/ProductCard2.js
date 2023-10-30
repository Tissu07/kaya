import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../Context/mainContext'

function ProductCard2(props) {

  const context = useContext(mainContext)
  const {getProductById} = context;

  const handleProductProfil = () =>{
    getProductById(props.id);
  }

  return (
    <Link to="ProductLarge"><div onClick={handleProductProfil}>
        <div className=' w-56 mt-2'>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div className=''>
                <p>{props.id}</p>
                <p className='font-bold'>{props.heading}</p>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </div>
    </div></Link>
  )
}

export default ProductCard2
