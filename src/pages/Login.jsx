import {  useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
        

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {

      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        toast.error("ERROR IS LOGIN");
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data);
      navigate("/Profile");
      toast.success("Successfully toasted!");
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <>
      <Toaster />
      <div className="main">
        <div className="login-container">
          <h1>Login</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
