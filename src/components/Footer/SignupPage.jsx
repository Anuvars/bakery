import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './SignupPage.scss';
// import loginImage from './signup.jpg'; // Import your login image


function SignUpPage() {
  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '' || contactNumber === '') {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            contactNumber,
          }),
        });
  
        if (response.ok) {
          navigate('/LoginPage');
        } else {
          const data = await response.json();
          console.error('Server response:', data); // Log the error response to the console
          alert('An error occurred during registration: ' + data.message); // Display the server's error message
        }
      } catch (error) {
        console.error('Client error:', error); // Log any unhandled exceptions to the console
        alert('An error occurred during registration: ' + error.message); // Display a generic error message
      }
    }
  };
  
  return (
   
    <div className="sign">
    <div className="login-container">
      <div className="signup-content">
        <div className="login-form">
          <h2>Create your account</h2>
         
          <form onSubmit={handleSignup} >
            <div className="form-group">
            <input
                    type="text"
                    id="username"
                    name="username" required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
            </div>
            <div className="form-group">
            <input
                    type="email"
                    id="email"
                    name="email" required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
            </div>
            <div className="form-group">
            <input
                    type="password"
                    id="password"
                    name="password" required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
            </div>
           <div className="form-group phone-input">
            <input type="text" value="91+" disabled />
            <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                   
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
          </div>
          <button type="submit">Sign Up</button><br/><br/>
          Already have a account? <Link to='/LoginPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Login</Link>
          </form>
        </div>
        {/* <div className="sign-image">
          <img src={loginImage} alt="Login" />
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default SignUpPage;