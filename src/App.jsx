import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Products from "./pages/Products";
import User from "./pages/User";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
 
return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Products token={token} />} />
      <Route path="/user" element={<User token={token} />} />
      <Route path="/login" element={<Login setToken={setToken} />} /> 
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route path="/cart" element={<Cart  token={token} />} />
    </Routes>
    </div>
  )
}

export default App
