import { useState } from "react"

export default function Register ({ setToken }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      
      <h1 className="header-position">Register</h1>
      <h2 className="instruction">Welcome, please sign-up below.</h2>
      <form className="register-bar">
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
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

