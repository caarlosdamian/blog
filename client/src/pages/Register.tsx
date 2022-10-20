import React from "react";
import { Link } from "react-router-dom";
import "../style.scss";

export const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" name="" id="username" placeholder="UserName" />
        <input required type="email" name="" id="username" placeholder="Email" />
        <input required type="password" name="" id="password" placeholder="Password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};
