import { useState } from "react";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
   
      const  result = await response.json();
      console.log(result)
      // setToken(result.token);
      // console.log(result.token);
     
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
  );
}
