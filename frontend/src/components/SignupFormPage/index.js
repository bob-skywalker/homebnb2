import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage({setShowLogIn,setSignUp}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .then(()=>{setSignUp(false)})
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

  const handleClick = e => {
    e.preventDefault();
    setShowLogIn(true);
    setSignUp(false);
  }




  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className='form'>
        <h1 className="title">Sign Up</h1>
          <ul>
            {errors.map((error) => <li key={error}>{error}</li>)}
          </ul>
          <label className="signup-user-details">
            Email
            <input
              className="input-box"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="signup-user-details">
            Username
            <input
              className="input-box"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="signup-user-details">
            Password
            <input
              className="input-box"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="signup-user-details">
            Confirm Password
            <input
              className="input-box"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button className="signup-button" type="submit">Sign Up</button>
          <div className="new-user-link">Have Account? <span className="switch-link" onClick={handleClick}>Log In</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupFormPage;
