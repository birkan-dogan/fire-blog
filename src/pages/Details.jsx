import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import loading from "../assets/loading.gif";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { DeleteBlog } from "../helpers/firebase";
import "../components/details/details.css";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Menu from "../components/details/Menu";

const Details = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { currentBlog, isLoading } = useContext(BlogContext);
  // console.log(currentUser);
  const navigate = useNavigate();
  const getData = () => {
    setBlog(currentBlog.filter((item) => item.id === id));
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(blog);
  // console.log(blog[0]?.currentUser);
  return (
    <div className="detail-container">
      {isLoading ? (
        <div className="spinner">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <div className="single">
          <div className="content">
            {blog?.map((item) => {
              return (
                <div className="content" key={item.id}>
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="user">
                    <FaUserCircle className="img" />

                    <div className="info">
                      <span>{item.currentUser}</span>
                      <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                      {item.currentUser === currentUser.email && (
                        <div className="edit-delete">
                          <span
                            className="outline-edit"
                            onClick={() => navigate(`/updateBlog/${id}`)}
                          >
                            <AiOutlineEdit />
                          </span>
                          <span onClick={() => DeleteBlog(item.id, navigate)}>
                            <MdDeleteOutline />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="content-div">
                    <h1>{item.title.toUpperCase()}</h1>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menu">
            <Menu posts={currentBlog.slice(0, 5)} id={id} setBlog={setBlog} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
