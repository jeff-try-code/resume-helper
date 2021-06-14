import React, { useState, useEffect } from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";

import Form from "./forms/Form.js";
import ChipGrid from "./common/ChipGrid.js";
import StyledIconButton from "./common/StyledIconButton.js";
import DisplayProjects from "./displayProjects/DisplayProjects.js";

import { getTags, getProjects } from "../api/FormApi.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    width: "100%",
    elevation: "3",
  },
}));

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const [showTag, setShowTag] = useState("all");
  const [tags, setTags] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getTags(setTags);
    getProjects(setProjects);
  }, []);

  const handleShowForm = (e) => {
    setShowForm(!showForm);
  };

  const handleShowTag = (e) => {
    if (showTag === e.target.textContent) {
      setShowTag("all");
    } else {
      setShowTag(e.target.textContent);
    }
  };
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <ChipGrid tags={tags} onClick={handleShowTag} array={[showTag]} />
        <Grid container justify="flex-end">
          <StyledIconButton
            label={"add project"}
            icon={<CreateIcon />}
            handleClick={handleShowForm}
          />
          {showForm && (
            <Paper elevation={3} className={classes.paper}>
              <Form
                setProjects={setProjects}
                setTags={setTags}
                tags={tags}
                handleShowForm={handleShowForm}
              />
            </Paper>
          )}
        </Grid>
      </Paper>
      <Paper elevation={3} className={classes.paper}>
        <DisplayProjects projects={projects} showTag={showTag}/>
      </Paper>
    </>
  );
};

export default Projects;
