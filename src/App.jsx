import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from "./pages/SingleProduct";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
 
return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Products token={token} />} />
      <Route path='/products/:id' element={<SingleProduct token={token} />} />
      <Route path="/login" element={<Login setToken={setToken} />} /> 
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route path="/cart" element={<Cart  token={token} />} />
      <Route path="/success" element={<Success /> } />
      <Route path="/cancel" element={<Cancel /> } />
    </Routes>
    </div>
  )
}

export default App
