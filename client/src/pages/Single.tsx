import React, { useContext, useEffect, useState } from "react";
import edit from "../assets/edit.png";
import deleteI from "../assets/delete.png";
import "../style.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../components";
import { iPostJoint } from "../interfaces";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

export const Single = () => {
  const [post, setPost] = useState<iPostJoint>();
  const { currentUser, token } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];

  console.log(token);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`http://localhost:8800/api/posts/${id}`, {
        headers: {
          token: `${token}`,
        },
      });
      setPost(res.data);
    };
    getPosts();
  }, [location, id, token]);

  const handleDelete = async () => {
    try {
      axios.delete(`http://localhost:8800/api/posts/${id}`, {
        headers: {
          token: `${token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="postImg" />
        <div className="user">
          <img
            src={post?.userImg || "https://i.imgur.com/6VBx3io.png"}
            alt="user"
          />
          <div className="info">
            <span>John</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={edit} alt={edit} />
              </Link>
              <img onClick={handleDelete} src={deleteI} alt={deleteI} />
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        {post?.desc}
      </div>
      <div className="menu">
        <Menu cat={post?.cat} />
      </div>
    </div>
  );
};
