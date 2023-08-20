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
      <Router>
        
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="header" element={<Header />} />
            <Route exact path="card" element={<ProductCard />} />
            <Route exact path="best" element={<BestsellingCard/>} />
            <Route exact path="show" element={<Allitem/>} />
            <Route exact path="category" element={<CategoryButton/>} />
            <Route exact path="shop" element={<Shop/>} />
            <Route exact path="footer" element={<Footer/>} />
            
          </Routes>
        </div>
      </Router>

    </div>
  );
}



export default App;