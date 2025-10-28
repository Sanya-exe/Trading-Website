import React from 'react'
import './SignUp.css';
import logo from '../../assets/logo.png'; 

const SignUp = () => {
  return (
     <div className="signup-page">
      <div className="signup-card">
        <img src={logo} alt="CryptoPlace Logo" className="signup-logo" />
        <h2>Create Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-note">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
  
}

export default SignUp
