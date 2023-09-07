import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/AllPosts/AllPostsService";

export const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postArray) => {
      setAllPosts(postArray);
    });
  }, []);

  return (
    <>
      <div>Posts!</div>
    </>
  );
};
