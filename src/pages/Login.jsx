import { useState } from "react"
import "./App.css"

export default function Login ({ token } ) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  async function handleClick(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://fakestoreapi.com/auth/login',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password
           }
    )
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
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
        <button onClick={handleClick} type="submit">Login</button>
        {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      </form>
    </div>
  )
}