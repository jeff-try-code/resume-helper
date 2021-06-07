import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Form from "./forms/Form.js";
import ChipGrid from "./common/ChipGrid.js";
import { getTags, getProjects } from "../api/FormApi.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
      <Paper className={classes.paper}>
        <ChipGrid tags={tags} onClick={showTag2} array={[show]} />
      </Paper>
      <Paper className={classes.paper}>

      <Form setProjects={setProjects} setTags={setTags} tags={tags} />
      </Paper>
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
