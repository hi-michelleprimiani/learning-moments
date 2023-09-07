export const getallTopics = () => {
  return fetch(`http://localhost:8088/Topics`).then((res) => res.json());
};
