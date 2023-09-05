import './App.css';
import './input.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Page/Home'
import ListCard from './component/ListCard'
import Header from './component/Header';
import ProductCard from './component/ProductCard';
import BestsellingCard from './component/BestsellingCard';
import Allitem from './component/Allitem';
import CategoryButton from './component/CategoryButton';
import Shop from './Page/Shop';
import Footer from './component/Footer';
import MainHeader from './component/MainHeader';
import CategoryNavbar from './component/CategoryNavbar';
import MainState from './Context/MainState';
import Catalog from './Page/Catalog';
import ProductCard2 from './component/ProductCard2';
import ProductProfile from './component/ProductProfile';



function App() {
  const handleGoogleLogin = () => {
    // Redirect to the Google authentication URL
    const backendUrl = 'http://localhost:5000'; // Example URL

    // Redirect to the Google authentication URL on the backend
    window.location.href = `${backendUrl}/api/auth/google`;
    return false;
  };
  return (
    <div>
      {/* <button className='black' onClick={handleGoogleLogin}>
        login
      </button> */}
      <MainState>
        <Router>

          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/main" element={<MainHeader />} />
              <Route exact path="header" element={<Header />} />
              <Route exact path="card" element={<ProductCard />} />
              <Route exact path="best" element={<BestsellingCard />} />
              <Route exact path="show" element={<Allitem />} />
              <Route exact path="category" element={<CategoryButton />} />
              <Route exact path="shop" element={<Shop />} />
              <Route exact path="footer" element={<Footer />} />
              <Route exact path="categoryNavbar" element={<CategoryNavbar />} />
              <Route exact path="shop/catalog" element={<Catalog/>} />
              <Route exact path="productCard2" element={<ProductCard2/>} />
              <Route exact path="productProfile" element={<ProductProfile/>} />


            </Routes>
          </div>
        </Router>
      </ MainState>

    </div>
  );
}



export default App;
