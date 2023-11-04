import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.css';
// import loginImage from './login.jpg'; // Import your login image

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields'); 
      return;
    }

    try {
      const response = await fetch('/coachlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
   
        alert('Login Successfull');
        navigate("/");
      } else {
        alert('Invalid username or password'); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.'); 
    }
  };
  return (
    <div className='log'>
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h2>Sign In</h2>
          <p>“Relax we've got this!”</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              
            <input
                  type="text"
                  id="input1"
                  name="input1"
                
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
            <input
                  type="password"
                  id="input2"
                  name="input2"
               
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button><br/><br/>
            Don't have a account? <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Create a new account</Link>
          </form>
        </div>
        {/* <div className="login-image">
          <img src={loginImage} alt="Login" />
         </div>
         */}
      </div>
    </div>
    </div>
  );
}

export default LoginPage;