import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.scss";

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
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
      .post("http://localhost:8800/api/auth/register", inputs)
      .then(() => navigate("/login"))
      .catch((err) => {
        setError(err.response.data);
      });
  };
  
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          name="username"
          id="username"
          placeholder="UserName"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          id=""
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
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};
