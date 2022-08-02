import NewBlogCreate from "../components/NewBlogCreate";
import { useFetch } from "../helpers/firebase";
import loading from "../assets/loading.gif";
import nodata from "../assets/no-data.png";
import BlogCard from "../components/BlogCard";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
const Dashboard = () => {
  // const { isLoading, blogList } = useFetch();
  const { currentBlog, isLoading } = useContext(BlogContext);
  return (
    <div>
      <NewBlogCreate />
      <h1 className="dashboard">──── Dashboard ────</h1>
      <main>
        {isLoading ? (
          <div className="spinner">
            <img src={loading} alt="loading" />
          </div>
        ) : currentBlog?.length === 0 ? (
          <div className="no-data">
            <img src={nodata} alt="" />
          </div>
        ) : (
          currentBlog?.map((blog) => <BlogCard blog={blog} key={blog.id} />)
        )}
      </main>
    </div>
  );
};
export default Dashboard;
