export const AllPostsFilter = ({ handleTopicChange, allTopics }) => {
  return (
    <select onChange={handleTopicChange}>
      <option>All Topics</option>
      {allTopics.map((topic) => (
        <option key={topic.id} value={topic.id}>
          {topic.name}
        </option>
      ))}
    </select>
  );
};
