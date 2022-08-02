import { createContext, useEffect, useState } from "react";
import { FetchData } from "../helpers/firebase";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [currentBlog, setCurrentBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchData(setCurrentBlog, setIsLoading);
  }, []);
  return (
    <BlogContext.Provider value={{ currentBlog, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;
