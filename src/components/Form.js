import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FormTextField from "./forms/FormTextField.js";
import FormChips from "./forms/FormChips.js";
import StyledButton from "./common/StyledButton.js";
import { getProjects, addProject } from "../api/FormApi.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: "100%",
  },
  chipPaper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: "100%",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Form = ({ setProjects, setTags, tags }) => {
  const defaultProject = {
    tags: [],
    name: "",
    overview: "",
    bulletPoints: ["", "", ""],
  };

  const [newProject, setNewProject] = useState(defaultProject);

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

  const saveProject = () => {
    addProject({ project: newProject }).then((res) => getProjects(setProjects));
    setNewProject(defaultProject);
  };

  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Grid item container className={classes.grid}>
          <FormChips
            newProject={newProject}
            setNewProject={setNewProject}
            setTags={setTags}
            tags={tags}
          />
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
          <StyledButton text={"Save Project"} handleClick={saveProject} />
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <>
          <pre>{JSON.stringify(newProject, null, 2)}</pre>
        </>
      </Paper>
    </>
  );
};

export default Form;
