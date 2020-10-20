import React from "react";

const Login = () => {
  const { values, submit, update } = props;
  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="login form">
      <header>
        <nav className="links">
          <a href="/home">Home</a>
          <a href="/signup">Sign up!</a>
        </nav>
      </header>
      <div className="login inputs">
        <form className="form container">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
          </label>
          <button>Submit</button>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
