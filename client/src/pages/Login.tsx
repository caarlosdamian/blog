import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "../style.scss";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
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
    try {
      await login(inputs);
      navigate("/");
    } catch (error: any) {
      setError(error?.response?.data);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="text"
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
