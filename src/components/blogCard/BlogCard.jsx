import React, { useContext, useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { BlogContext } from "../../contexts/BlogContext";
import { updateBlog } from "../../helpers/firebase";
import holder from "../../assets/placeholder.png";
import { toastWarnNotify } from "../../helpers/toastNotify";

const BlogCard = ({ blog }) => {
  const { currentUser } = useContext(AuthContext);
  const { currentBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const { content, imageUrl, title, id } = blog;
  const handleBlog = () => {
    currentUser
      ? navigate(`details/${id}`)
      : toastWarnNotify("Please Log in to see details");
  };
  const [like, setLike] = useState(false);
  const [number, setNumber] = useState(blog.likeNumber);
  const handleLike = () => {
    // console.log(like);

    like ? setNumber(number - 1) : setNumber(number + 1);
    setLike(!like);
    // console.log(like);
    updateBlog({ ...blog, likeNumber: number });
  };
  useEffect(() => {
    handleLike();
  }, []);

  const shortContent = content.slice(0, 300) + "...";

  return (
    <article className="post" onClick={handleBlog}>
      <div className="img">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <p dangerouslySetInnerHTML={{ __html: shortContent }}></p>

        <div className="icon">
          <FaUserEdit />
          <p>{blog.currentUser}</p>
        </div>

        {currentUser ? (
          <button className="to-see">Read More</button>
        ) : (
          <button className="to-see">Please Log in to see details</button>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
