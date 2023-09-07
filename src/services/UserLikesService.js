export const getUserLikes = () => {
  return fetch(`http://localhost:8088/UserLikes`).then((res) => res.json());
};
