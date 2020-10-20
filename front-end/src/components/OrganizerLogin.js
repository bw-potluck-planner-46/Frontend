import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  confirmUsername: yup
    .string()
    .required("Please enter your username")
    .when("username", {
      is: (username) => (username && username.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("username")], "username dosen't match"),
    }),
  password: yup.string().required("password is required"),
  confirmPassword: yup
    .string()
    .required("Please enter your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("paswword")], "password dosen't match"),
    }),
});

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const change = (evt) => {
    evt.preventDefault();
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };
  const history = useHistory()

  const loggingIn = (event) => {
    event.preventDefault()
    console.log("hi there, are you bringing enough skrat for everyone?")
    history.push(`/organizer/dashboard`)
  }

  return (
    <div className="form-group login">
      <form className="form-group login inputs" onSubmit={loggingIn}>
        <label>
          Username:
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={user.username}
            onChange={change}
          />
          {error.username.length > 0 ? <p>{error.username}</p> : null}
        </label>
        <label>
          Password:
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={user.password}
            onChange={change}
          />
          {error.password.length > 0 ? <p>{error.password}</p> : null}
        </label>
        <button type="submit">Log In</button>
      </form>
      <h5>Don't have an account ? <a href='./register'>Sign Up!</a></h5>
    </div>
  );
};
export default Login;
