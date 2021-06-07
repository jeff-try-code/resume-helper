import React from "react";
import FormTextField from "./FormTextField.js";
import StyledButton from "../common/StyledButton.js";

const FormBulletPoints = ({ newProject, setNewProject, handleChange }) => {

  const handleAddBulletPoint = (e) => {
    setNewProject({
      ...newProject,
      bulletPoints: [...newProject.bulletPoints, ""],
    });
  };
  const handleDeleteBulletPoint = (e) => {
    setNewProject({
      ...newProject,
      bulletPoints: newProject.bulletPoints.slice(
        0,
        newProject.bulletPoints.length - 1
      ),
    });
  };

  return (
    <>
      {newProject.bulletPoints.map((value, index) => {
        return (
          <FormTextField
            key={index}
            label={`Bullet Point ${index + 1}`}
            handleChange={handleChange}
            name={`bulletPoints ${index}`}
            value={value}
          />
        );
      })}
      <StyledButton
        text={"Add Bullet Point"}
        handleClick={handleAddBulletPoint}
      />
      <StyledButton
        text={"Delete Bullet Point"}
        handleClick={handleDeleteBulletPoint}
      />
    </>
  );
};

export default FormBulletPoints;
