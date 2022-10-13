import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { Link } from 'react-router-dom';
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    // console.log(sessionUser);
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ first_name: firstName, last_name: lastName, email, password }))
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
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="box">
    <div className="signup-page">
      <div id="create-account">
      <h1>Create your free account</h1>
      </div>
      <div className="session-form">
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        {/* <label>First Name:</label> */}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="   First Name"
            required
          />
        {/* <label>Last Name:</label> */}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="   Last Name"
            required
          />
        
        {/* <label>Email:</label> */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="   Email"
            required
          />
        
        {/* <label>Password:</label> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="   Password"
            required
          />
        
        {/* <label>Confirm Password:</label> */}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="   Comfirm Password"
            required
          />
       
      {/* <div className="button"> */}
      <button className="button" onSubmit={handleSubmit} to='/'>Sign Up</button>
      {/* </div> */}
      </form>
      </div>

<div className="or">
  <div className="text" >or</div>
  <hr className="hr"/>
</div>
    
      <div id="have-account">
      <>Already have an account?  </>
      <Link id="link" to="/login">Log in </Link>
      </div>
    </div>
    </div>
  );
}

export default SignupFormPage;