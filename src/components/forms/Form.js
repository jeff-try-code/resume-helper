import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FormChips from "./FormChips.js";
import FormProjectInfo from "./FormProjectInfo.js";
import StyledButton from "../common/StyledButton.js";
import { getProjects, addProject } from "../../api/FormApi.js";

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
}));

const Form = ({ setProjects, setTags, tags, handleShowForm }) => {
  const defaultProject = {
    tags: [],
    name: "",
    overview: "",
    bulletPoints: ["", "", ""],
  };

  const [newProject, setNewProject] = useState(defaultProject);

  const saveProject = (e) => {
    addProject({ project: newProject }).then((res) => getProjects(setProjects));
    closeForm(e);
  };

  const closeForm = (e) => {
    setNewProject(defaultProject);
    handleShowForm(e);
  };

  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      className={classes.grid}
      spacing={1}
    >
      <Typography variant="h4" style={{ paddingBottom: "10px", color: "gray" }}>
        Add Project
      </Typography>
        <FormChips
          newProject={newProject}
          setNewProject={setNewProject}
          setTags={setTags}
          tags={tags}
        />
      <FormProjectInfo newProject={newProject} setNewProject={setNewProject} />
      <Grid item>
        <StyledButton text={"Save Project"} handleClick={saveProject} />
        <StyledButton text={"close Form"} handleClick={closeForm} />
      </Grid>
      {/* <Grid>
        <pre>{JSON.stringify(newProject, null, 2)}</pre>
      </Grid> */}
    </Grid>
  );
};

export default Form;
