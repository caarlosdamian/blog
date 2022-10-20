import React from "react";
import { Link } from "react-router-dom";
import "../style.scss";

export const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          required
          type="text"
          name=""
          id="username"
          placeholder="UserName"
        />
        <input
          required
          type="password"
          name=""
          id="password"
          placeholder="Password"
        />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Don't you have an account? <Link to={"/register"}>Register</Link>
        </span>
      </form>
    </div>
  );
};
