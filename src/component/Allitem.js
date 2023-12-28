import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../Context/mainContext'
import item from '../image/list (1).jpeg'
import item2 from '../image/list (2).jpeg'
import item3 from '../image/list (4).jpeg'
import item4 from '../image/list (5).jpeg'
import item5 from '../image/list (7).jpeg'
import item6 from '../image/list (10).jpeg'
import item7 from '../image/list (8).jpeg'
import item8 from '../image/list (9).jpeg'
import menu from '../image/menu.png'


function Allitem() {

    const context = useContext(mainContext)
    const { getProductByCategory } = context;


    const clothShow = (category) =>{
        getProductByCategory(category)
        // console.log(e.target.innerText)
    }



    return (
        <div>
            <div className='hidden md:flex my-4 gap-4 justify-center md:w-5/6 lg:w-11/12  mx-auto py-5'>

                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("T-shirt")} >
                    <div className='border-2 rounded-full hover:shadow-2xl'>
                        <img className='rounded-full cursor-pointer' src={item} alt="" />
                    </div>
                    <p className='text-sm text-center'>T-shirt</p>
                </div></Link>
                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("jacket")} >
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item2} alt="" />
                    </div>
                    <p className='text-sm text-center'>Jacket</p>
                </div></Link>
                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("shirt")} >
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item3} alt="" />
                    </div>
                    <p className='text-sm text-center'>Shirt</p>
                </div></Link>
                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("jeans")}>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item4} alt="" />
                    </div>
                    <p className='text-sm text-center'>Jeans</p>
                </div></Link>
                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("bag")}>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item5} alt="" />
                    </div>
                    <p className='text-sm text-center'>Bag</p>
                </div></Link>
                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("shoes")}>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item6} alt="" />
                    </div>
                    <p className='text-sm text-center'>Shoes</p>
                </div></Link>
                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("watch")}>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item7} alt="" />
                    </div>
                    <p className='text-sm text-center'>Watches</p>
                </div></Link>
                <Link className=' lg:mx-2 w-3/4 p-2 ' to="catalog"><div onClick={()=>clothShow("cap")}>
                    <div className='border-2 rounded-full'>
                        <img className='rounded-full cursor-pointer' src={item8} alt="" />
                    </div>
                    <p className='text-sm text-center'>Cap</p>
                </div></Link>
                <div className='  w-3/4 p-3 '>
                    <img className='rounded-full w-96 border-2 p-4 cursor-pointer' src={menu} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Allitem
