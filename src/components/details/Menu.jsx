import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../contexts/BlogContext";

const Menu = ({ posts, id, setBlog }) => {
  const navigate = useNavigate();
  const { currentBlog, isLoading } = useContext(BlogContext);

  return (
    <div className="menu-post">
      <h1>Other posts you may like</h1>
      <div className="menu">
        {posts
          .filter((item) => item.id !== id)
          .map((post) => (
            <div className="post" key={post.id}>
              <img src={post.imageUrl} alt={post.title} />
              <h2>{post.title}</h2>
              <button
                onClick={() => {
                  navigate(`/details/${post.id}`);
                  setBlog(currentBlog.filter((item) => item.id === post.id));
                }}
              >
                Read More
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
