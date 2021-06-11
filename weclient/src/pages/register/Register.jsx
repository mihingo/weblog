import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Username"
          className="registerInput"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="registerInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          className="registerInput"
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Register;
