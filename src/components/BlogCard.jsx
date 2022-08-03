import React, { useContext, useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { updateBlog } from "../helpers/firebase";

const BlogCard = ({ blog }) => {
  // console.log(blog);
  const { currentUser } = useContext(AuthContext);
  const { currentBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const { content, imageUrl, title, id } = blog;
  const handleBlog = () => {
    currentUser ? navigate(`details/${id}`) : navigate("/login");
  };
  const [like, setLike] = useState(false);
  const [number, setNumber] = useState(blog.likeNumber);
  const handleLike = () => {
    console.log(like);
    console.log(blog);
    like ? setNumber(number - 1) : setNumber(number + 1);
    setLike(!like);
    console.log(like);
    updateBlog({ ...blog, likeNumber: number });
  };
  useEffect(() => {
    handleLike();
  }, []);

  return (
    <article className="blog-card">
      <div onClick={handleBlog}>
        <img src={imageUrl} alt={title} />
        <div className="content">
          <h1>{title.toUpperCase()}</h1>
          <p>{content.slice(0, 100) + "..."}</p>
        </div>
      </div>
      <div className="icon">
        <FaUserEdit />
        <p
          style={{
            display: "inline-block",
            marginLeft: ".5rem",
            fontSize: "1.1rem",
          }}
        >
          {blog.currentUser}
        </p>
      </div>
      {currentUser ? (
        <div className="like-comment d-flex m-3 gap-5">
          <div style={{ transform: "scale(1.5)" }}>
            <AiFillHeart
              style={{ color: like ? "grey" : "red" }}
              onClick={handleLike}
            />
            {blog.likeNumber}
          </div>
          <div style={{ transform: "scale(1.5)" }}>
            <FcComments /> 0
          </div>
        </div>
      ) : (
        <p className="toSee">Please Log in to see details</p>
      )}
    </article>
  );
};

export default BlogCard;
