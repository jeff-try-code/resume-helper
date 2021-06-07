import axios from "axios";

const getTags = (set) => {
  return axios.get("http://localhost:3001/tags").then((res) => {
    set(res.data);
  });
};
const getProjects = (set) => {
  return axios.get("http://localhost:3001/projects").then((res) => {
    set(res.data);
  });
};

const addTagReq = (newTag) => {
  return axios.post("http://localhost:3001/tags", newTag).then((res) => {
    console.log("done");
  });
};
const addProject = (newProject) => {
  return axios
    .post("http://localhost:3001/projects", newProject)
    .then((res) => {
      console.log("done");
    });
};

const deleteTagReq = (tag) => {
  return axios.post("http://localhost:3001/tags/delete", tag).then((res) => {
    console.log("done");
  });
};
export { getTags, getProjects, addTagReq, addProject, deleteTagReq };
