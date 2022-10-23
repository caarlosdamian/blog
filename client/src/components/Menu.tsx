import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { iPost } from "../interfaces";

interface Props {
  cat?: string;
}

export const Menu = ({ cat = "art" }: Props) => {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState<iPost[]>([]);
  useEffect(() => {
    const fetchCat = async () => {
      const rest = await axios.get(
        `http://localhost:8800/api/posts/?cat=${cat}`,
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      setPosts(rest.data);
    };
    fetchCat();
  }, [cat, token]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts?.map((item) => (
        <div className="post" key={item.id}>
          <img src={item.img} alt={item.img} />
          <h2>{item.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};
