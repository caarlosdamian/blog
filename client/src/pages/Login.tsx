import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.scss";

export const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState<any>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setInputs((previus) => ({ ...previus, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:8800/api/auth/login", inputs)
      .then(() => navigate("/"))
      .catch((err) => {
        setError(err.response.data);
      });
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          required
          type="email"
          name="email"
          id="username"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account? <Link to={"/register"}>Register</Link>
        </span>
      </form>
    </div>
  );
};
