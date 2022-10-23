import { db } from "../db";
import jwt from "jsonwebtoken";

export const addPost = (req: any, res: any) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

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
  const token = req.headers.token;
  if (!token) return res.status(401).json("You are not authenticated!");

  jwt.verify(token, "jwtkey", (err: any, decoded: any) => {
    if (err) return res.status(403).json("Token not valid!");
    const postId = req.params.id;
    const query =
      "UPDATE posts SET `title=?`, `desc=?`, `img=?`, `cat=?` WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(query, [...values, postId, decoded.id], (err: any, data: any) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
