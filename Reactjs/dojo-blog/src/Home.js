import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading ? <div>Loading....</div> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
