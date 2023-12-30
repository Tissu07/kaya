import React,{useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../Context/mainContext'

// function ProductCard2(props) {
//   const context = useContext(mainContext)
//   const {getProductById,addCart,getCartDetail,fetchCartProductsDetails,cart,cartProduct,setCurrentImage} = context;
  


//   const handleProductProfil = () =>{
//     getProductById(props.id)
//     setCurrentImage(props.image)
//   }

//   return (
//     <Link to="ProductLarge"><div onClick={handleProductProfil}>
//         <div className='w-56 mt-2'>
//             <div >
//                 <img className='' src={`http://localhost:5000/api/uploadImage/${props.image}`} alt="" />
//             </div>
//             <div className=''>
//                 <p className='font-bold'>{props.heading}</p>
//                 <p>{props.description}</p>
//                 <p>{props.price}</p>
//             </div>
//         </div>
//     </div></Link>
//   )
// }

// export default ProductCard2

function ProductCard2(props) {
  const context = useContext(mainContext);
  const { getProductById, setCurrentImage } = context;

  const handleProductProfil = () => {
    getProductById(props.id);
    setCurrentImage(props.image);
  };

  return (
    <Link to="ProductLarge">
      <div onClick={handleProductProfil} className='mb-20 xl:mb-20' style={{ height: '300px' }}>
        <div className="w-56 mt-2 h-full ">
          <div className="h-full">
            <img
              className="w-full h-full object-cover"
              src={`http://localhost:5000/api/uploadImage/${props.image}`}
              alt=""
            />
          </div>
          <div className="my-2">
            <p className="font-bold my-1">{props.heading}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard2;