import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { iPost } from "../interfaces";
import "../style.scss";

export const Home = () => {
  const [posts, setPosts] = useState<iPost[]>([]);
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const cat = location.search;
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`http://localhost:8800/api/posts/${cat}`, {
        headers: {
          token: `${token}`,
        },
      });
      setPosts(res.data);
    };
    getPosts();
  }, [cat, location, token]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((item) => (
          <div className="post" key={item.id}>
            <div className="img">
              <img src={item.img} alt={item.desc} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${item.id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p>{item.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
