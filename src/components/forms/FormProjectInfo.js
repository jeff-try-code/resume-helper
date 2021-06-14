import React from "react";
import FormTextField from "./FormTextField.js";
import FormBulletPoints from "./FormBulletPoints.js";

const FormProjectInfo = ({ newProject, setNewProject }) => {
  const handleChange = (e) => {
    const name = e.target.name.split(" ");
    if (name[0] === "bulletPoints") {
      const newBulletPoints = newProject.bulletPoints.slice();
      newBulletPoints[name[1]] = e.target.value;
      setNewProject({
        ...newProject,
        [name[0]]: newBulletPoints,
      });
    } else {
      setNewProject({
        ...newProject,
        [name[0]]: e.target.value,
      });
    }
  };

  return (
    <>
      <FormTextField
        label={"Project Name"}
        handleChange={handleChange}
        name={"name"}
        value={newProject.name}
      />
      <FormTextField
        label={"Project Overview"}
        handleChange={handleChange}
        name={"overview"}
        value={newProject.overview}
      />
      <FormBulletPoints
        newProject={newProject}
        setNewProject={setNewProject}
        handleChange={handleChange}
      />
    </>
  );
};

export default FormProjectInfo;
