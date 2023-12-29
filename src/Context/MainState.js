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
  const [productProfile, setProductProfile] = useState([])
  const [cart,setCart] = useState([])
  const [cartProduct, setCartProduct] = useState([])
  const [uploadedImage, setUploadedImage] = useState("")
  const [currentImage, setCurrentImage] = useState("")

  //Product detail upload
  const [productCredential, setProductCredential] = useState({ name: "", description: "", price: "", quantity: "", category: "" })

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

  // const getProductByCategory = async (category) => {
  //   // API call 
  //   const response = await fetch(`${host}/api/products/category/allitem/${category}`, {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const json = await response.json()
  //   setProductByCategory(json)
  // }

  const addProduct = async (name,description,price,stockQuantity,categoryName,image,gender) => {
    try {
      const response = await fetch(`${host}/api/products/${gender}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          name,
          description,
          price,
          stockQuantity,
          categoryName,
          image
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log("error in added");
    }
  }

  const getProductById = async (id) => {
    // API call 
    const response = await fetch(`${host}/api/products/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
      setProductProfile(json);
  }

  const addCart = async (productId, quantity) => {
    try {
      const response = await fetch(`${host}/api/cart`, {
        method: "POST",
        body:JSON.stringify({
          productId,
          quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'token': localStorage.getItem('token')
        }
      });

      const json = await response.json();
      console.log("added")
    } catch (err) {
      console.log(err);
    }
  }

  const getCartDetail = async() => {
    try{
      const response = await fetch(`${host}/api/cart`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
      });
      const json = await response.json()
      setCart(json);
    }
    catch(error){
      console.log({error:"Issue in get cart data"})
    }
  }

  const cartProductDetail = async (productId) => {

    const response = await fetch(`${host}/api/products/${productId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const json = await response.json();
    // Create a new object with the data from the API response
    const temp = {
      name: json.name,
      description: json.description,
      price: json.price,
      image: json.image,
    };

    return temp
  
    // Create a new array by spreading the existing cartProduct array and appending the new item
    // if(cartProduct){
    //   const newCartProduct = [...cartProduct, temp];
    //   setCartProduct(newCartProduct);
    //   console.log("Cart Product detail fetch")
    // }
    // else{
    //   setCartProduct(temp)
    // }    
  };


  const fetchCartProductsDetails = async (cart) => {
    try{
      const updatedCartProducts = [];
      
      for (const product of cart.products) {
        const productDetail = await cartProductDetail(product.productId);
        updatedCartProducts.push(productDetail);
      }

      setCartProduct(updatedCartProducts);
      console.log(cartProduct)
    
    }
    catch(error){
      console.log({error:"cant'fetch"})
    }
  };

  return (
    <mainContext.Provider value={{ genderCategoryMale, getGenderCategoryMale, genderCategoryFemale, genderCategoryKid, getGenderCategoryFemale, getGenderCategoryKid, dropDownShow, setDropDownShow, dropDown, setDropDown, getProductByGender, productByGender,setProductByGender, productCredential, setProductCredential, addProduct, getProductById, productProfile, setProductProfile, addCart, cart, getCartDetail,cartProductDetail,cartProduct,fetchCartProductsDetails,cartProduct,uploadedImage, setUploadedImage,currentImage, setCurrentImage}}>
      {props.children}
    </mainContext.Provider>
  )
}

export default MainState;
