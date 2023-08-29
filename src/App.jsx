import { Routes, Route } from "react-router-dom"
import Products from "./pages/Products";
import User from "./pages/User";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";


function App() {
return (
    <div>
      <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </div>
  )
}

export default App
