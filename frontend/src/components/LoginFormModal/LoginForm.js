import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import "./LoginForm.css";
import { getCurrentUser } from "../../store/session";
import { Redirect, useHistory } from "react-router-dom";
import SignupFormModal from "../SignupFormModal";

function LoginForm({setShowLogIn,setSignUp}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Redirect to='/search'/>

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(()=>{setShowLogIn(false)})
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

  const demoUser = (e) => {
    e.preventDefault();
    setShowLogIn(false);
    setSignUp(false);
    dispatch(sessionActions.login({
      credential:"demo@user.io",
      password:'password'
    }))
  }

  const handleClick = (e) => {
    e.preventDefault();
    setShowLogIn(false);
    setSignUp(true)
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className='form'>
          <h1 className="title">Welcome Back!</h1>
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <label className="user-details">
            Username / Email
            <input
              className="input-box"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="user-details">
            Password
            <input
              className="input-box"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="login-buttons">
          <button className="login-button" type="submit">Log In</button>
          <button className="demo-button"  onClick={demoUser}>Demo User</button>
          </div>
          <div className="new-user-link">No Account? <span  className="switch-link" onClick={handleClick}>Create one</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
