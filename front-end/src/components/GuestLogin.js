import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios"
import axiosWithAuth from "../utils/AxiosWithAuth"
import {postLogin} from "../actions"
import styled from 'styled-components'


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
    console.log(`hi there, are you bringing enough 'skrat for everyone, ${user.username}?`)
   
    axiosWithAuth()
      .post('/api/auth/login', user)
      .then(response => window.localStorage.setItem('token', response.data.token), history.push(`/guest/dashboard`))
      .catch(error => console.log(error))
  }

  return (
    <StyledDiv className="form-group login">
      <h2>Hello guest, please log in for muskrats</h2>
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
            type="text"
            placeholder="password"
            value={user.password}
            onChange={change}
          />
          {error.password.length > 0 ? <p>{error.password}</p> : null}
        </label>
        <button type="submit">Log In</button>
      </form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
* {
  border: 1px solid purple;
  margin: 2%;
  text-align: center;
}
`

export default Login;
