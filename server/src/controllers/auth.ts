import { db } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = (req: any, res: any) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req: any, res: any) => {
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    // check password is correct
    const validPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!validPassword)
      return res.status(400).json("Invalid password or username!");

    const { password, ...otherInfo } = data[0];

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherInfo);
  });
};

export const logout = (req: any, res: any) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("Logged out!");
};
