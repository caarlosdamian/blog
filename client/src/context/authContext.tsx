import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { iAuthContext, iInputs } from "../interfaces";

export const AuthContext = createContext<iAuthContext>({
  currentUser: null,
  login: (inputs: iInputs) => {},
  logout: () => {},
});

export const AuthContexProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")!) || null
  );

  const login = async (inputs: any) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs
    );
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
