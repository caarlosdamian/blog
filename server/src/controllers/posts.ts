import { db } from "../db";
import jwt from "jsonwebtoken";
import { send } from "process";

export const addPost = (req: any, res: any) => {};

export const getPosts = (req: any, res: any) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json("You are not authenticated!");

  const query = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.cat], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req: any, res: any) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json("You are not authenticated!");

  jwt.verify(token, "jwtkey", (err: any, decoded: any) => {
    if (err) return res.status(403).json("Token not valid!");

    const query =
      "SELECT `username`,`title`,`desc`,users.img AS userImg, posts.img,`cat`, `date`, posts.id FROM users INNER JOIN posts ON users.id=posts.uid WHERE posts.id = ?";
    db.query(query, [req.params.id], (err: any, data: any) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data[0]);
    });
  });
};

export const deletePost = (req: any, res: any) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json("You are not authenticated!");

  jwt.verify(token, "jwtkey", (err: any, decoded: any) => {
    if (err) return res.status(403).json("Token not valid!");

    const query = "DELETE FROM posts WHERE id = ? AND uid = ?";
    db.query(query, [req.params.id, decoded.id], (err: any, data: any) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const updatePost = (req: any, res: any) => {
  res.json("from controller");
};
