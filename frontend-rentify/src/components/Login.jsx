import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { DataContainer } from "../../App";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const { setCartItem } = useContext(DataContainer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          // Save user data to local storage or context
          setCartItem(response.data.cartItem);
          history.push("/");
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        setError("An error occurred");
        console.log(error);
      });
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>New user? <span onClick={handleRegister}>Register here</span></p>
    </div>
  );
};

export default Login;
