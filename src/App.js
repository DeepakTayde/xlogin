import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] =useState(true)


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(e.target.value === 'user' && e.target.value==='password'){
      setIsLogin(false)
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
            <input type="text" name="username" value="" alt="username" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="text" name="password" value="" alt="password" required />
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
