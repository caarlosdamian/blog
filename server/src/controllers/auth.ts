import { db } from "../db";
import bcrypt from "bcrypt";

export const register = async (req: any, res: any) => {
  // Check if user exists
  const query = `SELECT * FROM users WHERE email = ? OR username = ?`;

  db.query(query, [req.body.email, req.body.username], (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    if (result.length > 0) {
      res.status(409).json("User already exists");
    }

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);

    const q = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    const values = [req.body.username, req.body.email, hash];
    db.query(q, values, (err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).json("User created");
    });
  });
};

export const login = async (req: any, res: any) => {};

export const logout = async (req: any, res: any) => {};
