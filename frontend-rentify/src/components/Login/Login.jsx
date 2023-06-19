import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.css';
import { useNavigate } from 'react-router-dom';

const EmailLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic
    navigate('/'); // Redirect back to the main login page
  };

  return (
    <div>
      <h2>Email Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Perform registration logic
    navigate('/'); // Redirect back to the main login page
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div> 
  );
};

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);

      // Assuming login is successful
      const popup = window.open('', '_blank');
      popup.postMessage('loginSuccess', 'https://console.firebase.google.com/project/loginpage-915b8');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailLogin = () => {
    navigate('/login/email'); // Redirect to the email login form
  };

  const handleRegister = () => {
    navigate('/register'); // Redirect to the register form
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const renderButton = () => {
    if (auth.currentUser) {
      return (
        <button onClick={handleLogout} className="google-button">
          Logout
        </button>
      );
    } else {
      return (
        <button onClick={handleGoogleLogin} className="google-button">
          <FcGoogle /> Sign in with Google
        </button>
      );
    }
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
          {renderButton()}
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import { auth } from '../../utils/firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import './login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   const googleProvider = new GoogleAuthProvider();

//   const handleGoogleLogin = async () => {
//     try {
//     const result = await signInWithPopup(auth, googleProvider);
//     console.log(result.user);
//     navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const renderButton = () => {
//     if (auth.currentUser) {
//       return (
//         <button onClick={handleLogout} className='google-button'>
//           Logout
//         </button>
//       );
//     } else {
//       return (
//         <button onClick={handleGoogleLogin} className='google-button'>
//           <FcGoogle /> Sign in with Google
//         </button>
//       );
//     }
//   };

//   return (
//     <div className='ring'>
//     <h2>sign in with google</h2>
//     {renderButton()}
//     </div>
//   );
// };

// export default Login;