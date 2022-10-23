import { db } from "../db";

export const addPost = (req: any, res: any) => {};

export const getPosts = (req: any, res: any) => {

  const token = req.cookies.acces_token;
  console.log(token);
  const query = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.cat], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req: any, res: any) => {
  const query =
    "SELECT `username`,`title`,`desc`,users.img AS userImg, posts.img, `date`, posts.id FROM users INNER JOIN posts ON users.id=posts.uid WHERE posts.id = ?";
  db.query(query, [req.params.id], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const deletePost = (req: any, res: any) => {

  const query = "DELETE FROM posts WHERE id = ?";
  db.query(query, [req.params.id], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updatePost = (req: any, res: any) => {
  res.json("from controller");
};
