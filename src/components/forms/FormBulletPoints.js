import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

import FormTextField from "./FormTextField.js";

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
        <ButtonGroup
          variant="contained"
          color="primary"
          style={{paddingTop:"10px"}}
        >
          <Button onClick={handleAddBulletPoint}>Add Bullet Point</Button>
          <Button onClick={handleDeleteBulletPoint}>Delete Bullet Point</Button>
        </ButtonGroup>
    </>
  );
};

export default FormBulletPoints;
