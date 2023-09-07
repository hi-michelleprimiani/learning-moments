export const AllPostsSearch = ({ searchTerm, handleSearchChange }) => {
  return (
    <input
      className="posts-search"
      type="text"
      placeholder="Search posts"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};
