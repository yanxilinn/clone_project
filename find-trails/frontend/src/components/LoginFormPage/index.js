import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import { Link } from 'react-router-dom';


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const handleDemo = (e) => {
    e.preventDefault();
    setEmail("yanxilinnn@gmail.com")
    setPassword("password")
    return dispatch(sessionActions.login({ setEmail, setPassword }))
  }

  return (
    <div className="login-box">
      <div className="login-page">
        <div id="login-word">
      <h1>Log in and let's get going</h1>
       </div>
       <div className="login-form">
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        {/* <label>Email</label> */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="  Email address"
            required
          />
        
        {/* <label>Password</label> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="  Password"
            required
          />
        <button className="login-button" to='/login'>Log In</button>
        <div className="login-or">
          <div className="text2" >or</div>
          <hr className="hr2"/>
        </div>
      </form>
      <div className="demo">
        <button className="demo-login" onClick={handleDemo} to='/'>Demo User</button>
      </div>
      <div className="resignup-link">
        <Link to='/signup'>Forgot your password?</Link>
        </div>
      <div id="terms">
      By continuing to use FindTrails, you agree to our Terms of Service and Privacy Policy.
      </div>
    <div className="dont-have-account">
    Don't have an account? <Link id="sig" to='/signup'>Sign up for free</Link>
    </div>

      </div>
      </div>

    </div>


  );
}

export default LoginFormPage;