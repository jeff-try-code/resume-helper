import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";


import StyledChip from "./common/StyledChip.js";
import Form from "./Form.js"
import {
  getTags,
  getProjects,
} from "../api/FormApi.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: "100%",
  },
  chipGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    width: "100%",
  },
  chipPaper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: "100%",
  },
}));

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState("all");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags(setTags);
    getProjects(setProjects);
  }, []);

  const showTag2 = (e) => {
    console.log(e.target.textContent);
    if (show === e.target.textContent) {
      setShow("all");
    } else {
      setShow(e.target.textContent);
    }
  };



  const classes = useStyles();
  return (
    <>
      <Paper className={classes.chipPaper}>
        <Grid className={classes.chipGrid}>
          {tags.map((data) => {
            return (
              <li key={data}>
                <StyledChip
                  label={data}
                  onClick={showTag2}
                  color={show === data ? "primary" : "default"}
                />
              </li>
            );
          })}
        </Grid>
      </Paper>
      <Form setProjects={setProjects} setTags={setTags} tags={tags}/>
      <Paper className={classes.paper}>
        {projects.map((pro) => {
          if (show === "all" || pro.tags.includes(show)) {
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
