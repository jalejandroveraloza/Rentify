import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailLogin = () => {
    navigate("/login/email"); // Redirect to the email login form
  };

  const handleRegister = () => {
    navigate("/register"); // Redirect to the register form
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="join-today">Join Today</h2>
        <div className="login-options">
          <h3>Sign in using:</h3>
          <button onClick={handleEmailLogin} className="email-button">
            Email
          </button>
        </div>
        <div className="login-options">
          <h3>Don't have an account? Sign up:</h3>
          <button onClick={handleRegister} className="register-button">
            Register
          </button>
        </div>
        <div className="divider">
          <hr />
          <p>Or</p>
          <hr />
        </div>
        <div className="login-options">
          <h3>Sign in with your Google account</h3>
          <button onClick={handleGoogleLogin} className="google-button">
            <FcGoogle /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
