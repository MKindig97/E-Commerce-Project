import { useState } from "react"
import "./Authentication.css"

export default function Login ({ setToken} ) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [popupStyle, showPopup] =useState("hide")
  
  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

 
  return (
    <div>
      <h1 className="header-position">Login</h1>
      <h2 className="instruction">Welcome, please login below.</h2>
      <form className="login-bar" >
        <label htmlFor="username">Username</label>
        <input 
        type="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password"
        placeholder="*********" 
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
  
      </form>
    </div>
  )
}