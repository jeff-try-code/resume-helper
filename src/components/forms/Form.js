import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FormChips from "./FormChips.js";
import FormProjectInfo from "./FormProjectInfo.js";
import StyledButton from "../common/StyledButton.js";
import { getProjects, addProject } from "../../api/FormApi.js";

const useStyles = makeStyles((theme) => ({
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

  const saveProject = () => {
    addProject({ project: newProject }).then((res) => getProjects(setProjects));
    setNewProject(defaultProject);
  };

  const classes = useStyles();
  return (
    <Grid item container className={classes.grid}>
      <FormChips
        newProject={newProject}
        setNewProject={setNewProject}
        setTags={setTags}
        tags={tags}
      />
      <FormProjectInfo newProject={newProject} setNewProject={setNewProject} />
      <StyledButton text={"Save Project"} handleClick={saveProject} />
      <pre>{JSON.stringify(newProject, null, 2)}</pre>
    </Grid>
  );
};

export default Form;
