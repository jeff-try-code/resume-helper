import React, { useState, useEffect } from "react";
import { Paper, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Form from "./forms/Form.js";
import ChipGrid from "./common/ChipGrid.js";
import StyledButton from "./common/StyledButton.js";
import { getTags, getProjects } from "../api/FormApi.js";
import CreateIcon from "@material-ui/icons/Create";

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
          <IconButton
            color="primary"
            aria-label="add project"
            onClick={handleShowForm}
          >
            <CreateIcon />
          </IconButton>
          {showForm && (
            <Paper elevation={3} className={classes.paper}>
              <Form setProjects={setProjects} setTags={setTags} tags={tags} />
            </Paper>
          )}
        </Grid>
      </Paper>
      <Paper elevation={3} className={classes.paper}>
        {projects.map((pro) => {
          if (showTag === "all" || pro.tags.includes(showTag)) {
            return (
              <>
                <pre>{JSON.stringify(pro, null, 2)}</pre>
                <p>________________________________________</p>
              </>
            );
          } else {
            return <></>;
          }
        })}
      </Paper>
    </>
  );
};

export default Projects;
