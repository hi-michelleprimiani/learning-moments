import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/AllPostsService";
import { getallTopics } from "../../services/TopicService";
import { getUserLikes } from "../../services/UserLikesService";
import "./AllPosts.css";
import { AllPostsSearch } from "./AllPostsSearch";
import { AllPostsFilter } from "./AllPostsFilter";

export const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPosts().then(setAllPosts);
    getallTopics().then(setAllTopics);
    getUserLikes().then(setUserLikes);
  }, []);

  const numberOfLikes = (postId) => {
    return userLikes.filter((like) => like.postId === postId).length;
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(parseInt(event.target.value));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredPosts = selectedTopic
    ? allPosts.filter((post) => post.topicId === selectedTopic)
    : allPosts;

  if (searchTerm) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      <div className="posts-filter-search">
        <AllPostsSearch
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <div className="posts-filter">
          <AllPostsFilter
            handleTopicChange={handleTopicChange}
            allTopics={allTopics}
          />
        </div>
      </div>
      {filteredPosts.map((post) => {
        const topic = allTopics.find((t) => t.id === post.topicId);
        const likes = numberOfLikes(post.id);
        return (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>Topic: {topic ? topic.name : "Unknown"}</p>
            <p>Likes: {likes}</p>
          </div>
        );
      })}
    </>
  );
};
