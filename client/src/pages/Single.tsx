import React from "react";
import edit from "../assets/edit.png";
import deleteI from "../assets/delete.png";
import "../style.scss";
import { Link } from "react-router-dom";
import { Menu } from "../components";

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hhh"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt={edit} />
            </Link>
            <img src={deleteI} alt={deleteI} />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          numquam
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia,
          modi, vero distinctio, temporibus praesentium rerum ea a sunt magni
          quis? Aspernatur laudantium ad maiores esse minus quibusdam sint
          porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis voluptas ducimus, nam illum unde a deserunt labore dolorum
          corporis impedit dolore! Corporis asperiores inventore libero sit
          quaerat! Ut, illo perferendis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda reprehenderit unde repellendus laudantium
          nostrum iusto esse corrupti modi error fugit ex adipisci quam totam
          exercitationem vitae sit, natus quaerat dolores.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};
