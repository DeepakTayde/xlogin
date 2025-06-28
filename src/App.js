import { useState } from "react";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] =useState(true)


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username === 'user' && password==='password'){
      setIsLogin(false)
    }else{
      alert('userName and Password is incorrect')
    }
  }
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Login Page</h1>
        {isLogin && (
                  <form onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <label for="username">UserName:</label>
            <input type="text" name="username" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="text" name="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">submit</button>
        </form>
        )}

        {!isLogin &&(
          <h5>welcome to login page...</h5>
        )}
      </div>
    </div>
  );
}

export default App;
