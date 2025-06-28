import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setIsLogin(false);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Login Page</h1>
        {!isLogin && <h5>Welcome, user!</h5>}
        {error && (
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>{error}</div>
        )}
        {isLogin && (
          <form onSubmit={handleSubmit} className="formContainer">
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
