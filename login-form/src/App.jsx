import { useState } from 'react';
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  function doThisWhenButtonIsClicked() {
    console.log('Clicked');
    setShowPassword(!showPassword);
  }
  return (
    <>
      <h2>Hello, welcome to my portfolio</h2>
      <div>
        <input placeholder="Email" className="email-input" />
      </div>
      <div>
        <input
          placeholder="Password"
          className="password-input"
          type={showPassword ? 'text' : 'password'}
        />
        <button className="show-button" onClick={doThisWhenButtonIsClicked}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <div>
        <button className="login-button">Login</button>
        <button className="signup-button">Sign up</button>
      </div>
    </>
  );
}

export default App;
