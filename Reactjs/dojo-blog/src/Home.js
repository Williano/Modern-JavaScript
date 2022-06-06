import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading ? <div>Loading....</div> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
