import { useState } from "react"

export default function Register ({ setToken }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email:'John@gmail.com',
          username:'johnd',
          password:'m38rmF$',
          name:{
              firstname:'John',
              lastname:'Doe'
          },
          address:{
              city:'kilcoole',
              street:'7835 new road',
              number:3,
              zipcode:'12926-3874',
              geolocation:{
                  lat:'-37.3159',
                  long:'81.1496'
              }
          },
          phone:'1-570-236-7033'
      }
  )
      });

      const result = await response.json();
      setToken(result.token);
      console.log(result.token);
      //console.log(result);

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      
      <h1 className="header-position">Register</h1>
      <h2 className="instruction">Welcome, please sign-up below.</h2>
      <form onSubmit={handleSubmit} className="register-bar">
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

