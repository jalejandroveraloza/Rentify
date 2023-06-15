import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
//import { useHistory } from 'react-router-dom';
import "./login.css";


const Login = () => {

  const [user, loading] = useAuthState(auth);
  //const history = useHistory(); // Get the history object

  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      //history.push("/"); // Redirect to the "/" route after successful sign-in

    } catch (error) {
      console.log(error);
    }
  }
  return (
    
    <div className="login-container">
      <div className="login-box">
      <h2>Join Today</h2>
        <h3>Sign in with your Google account</h3>
        <button onClick={GoogleLogin} className="google-button"><FcGoogle /> Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
