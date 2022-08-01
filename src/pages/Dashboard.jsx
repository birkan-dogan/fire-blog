import NewBlogCreate from "../components/NewBlogCreate";
import { useFetch } from "../helpers/firebase";
import loading from "../assets/loading.gif";
import nodata from "../assets/no-data.png";
import BlogCard from "../components/BlogCard";
const Dashboard = () => {
  const { isLoading, blogList } = useFetch();
  return (
    <div>
      <NewBlogCreate />
      <main>
        {isLoading ? (
          <div className="spinner">
            <img src={loading} alt="loading" />
          </div>
        ) : blogList?.length === 0 ? (
          <div className="no-data">
            <img src={nodata} alt="" />
          </div>
        ) : (
          blogList?.map((blog) => <BlogCard blog={blog} id={blog.id} />)
        )}
      </main>
    </div>
  );
};
export default Dashboard;
