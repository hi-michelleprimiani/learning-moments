export const getAllPosts = () => {
  return fetch(`http://localhost:8088/Posts`).then((res) => res.json());
};
