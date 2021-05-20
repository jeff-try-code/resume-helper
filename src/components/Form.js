import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: theme.spacing(2),
    width: "100%",
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    borderRadius: "25px",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  chipPaper: {
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
  grid: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Form = (props) => {
  const [tags, setTags] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectOverview, setProjectOverview] = useState("");
  const [projectBulletPoint1, setProjectBulletPoint1] = useState("");
  const [projectBulletPoint2, setProjectBulletPoint2] = useState("");
  const [projectBulletPoint3, setProjectBulletPoint3] = useState("");
  const [projectBulletPoint4, setProjectBulletPoint4] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newProjectTags, setNewProjectTags] = useState([]);
  const [show, setShow] = useState("all");

  useEffect(() => {
    getTags();
    getProjects();
  }, []);

  const getTags = () => {
    return axios.get("http://localhost:3001/tags").then((res) => {
      setTags(res.data);
    });
  };
  const getProjects = () => {
    return axios.get("http://localhost:3001/projects").then((res) => {
      setProjects(res.data);
    });
  };

  const addTagReq = (newTag) => {
    return axios.post("http://localhost:3001/tags", newTag).then((res) => {
      console.log("done");
    });
  };
  const addProject = (newProject) => {
    return axios
      .post("http://localhost:3001/projects", newProject)
      .then((res) => {
        console.log("done");
      });
  };

  const deleteTagReq = (tag) => {
    return axios.post("http://localhost:3001/tags/delete", tag).then((res) => {
      console.log("done");
    });
  };
  const handleDelete = (chipToDelete) => () => {
    deleteTagReq({ tag: chipToDelete }).then((res) => getTags());
    setNewProjectTags(newProjectTags.filter((tag) => tag !== chipToDelete));
  };

  const handleAddTag = (e) => {
    addTagReq({ tag: newTag }).then((res) => getTags());
    setNewTag("");
  };

  const selectTag = (chip) => {
    if (newProjectTags.includes(chip)) {
      setNewProjectTags(newProjectTags.filter((tag) => tag !== chip));
    } else {
      setNewProjectTags([...newProjectTags, chip]);
    }
  };

  const showTag = (chip) => {
    if (show === chip) {
      setShow("all");
    } else {
      setShow(chip);
    }
  };

  const handleChangeProjectName = (e) => {
    setProjectName(e.currentTarget.value);
  };
  const handleChangeProjectOverview = (e) => {
    setProjectOverview(e.currentTarget.value);
  };
  const handleChangeProjectBulletPoint1 = (e) => {
    setProjectBulletPoint1(e.currentTarget.value);
  };
  const handleChangeProjectBulletPoint2 = (e) => {
    setProjectBulletPoint2(e.currentTarget.value);
  };
  const handleChangeProjectBulletPoint3 = (e) => {
    setProjectBulletPoint3(e.currentTarget.value);
  };
  const handleChangeProjectBulletPoint4 = (e) => {
    setProjectBulletPoint4(e.currentTarget.value);
  };

  const saveProject = () => {
    let bulletPoints = [
      projectBulletPoint1,
      projectBulletPoint2,
      projectBulletPoint3,
      projectBulletPoint4,
    ].filter((point) => point.length > 0);
    let project = {
      tags: newProjectTags,
      name: projectName,
      overview: projectOverview,
      bulletPoints: bulletPoints,
    };
    addProject({ project: project }).then((res) => getProjects());
    console.log(project);
    setProjectName("");
    setProjectOverview("");
    setProjectBulletPoint1("");
    setProjectBulletPoint2("");
    setProjectBulletPoint3("");
    setProjectBulletPoint4("");
    setNewProjectTags([]);
  };

  const classes = useStyles();
  return (
    <Grid item container xs={10}>
      <Paper className={classes.chipPaper}>
        <Grid className={classes.chipGrid}>
          {tags.map((data) => {
            return (
              <li key={data}>
                <Chip
                  clickable
                  onClick={() => showTag(data)}
                  color={show === data ? "primary" : "default"}
                  label={data}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              </li>
            );
          })}
        </Grid>
        <Grid item container className={classes.grid}>
          <TextField
            value={newTag}
            variant="outlined"
            margin="dense"
            onChange={(e) => {
              setNewTag(e.currentTarget.value);
            }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className={classes.button}
            onClick={handleAddTag}
          >
            Tag
          </Button>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid item container className={classes.grid}>
          <Grid className={classes.chipGrid}>
            {tags.map((data) => {
              return (
                <li key={data}>
                  <Chip
                    size="small"
                    color={
                      newProjectTags.includes(data) ? "primary" : "default"
                    }
                    label={data}
                    className={classes.chip}
                    clickable
                    onClick={() => selectTag(data)}
                  />
                </li>
              );
            })}
          </Grid>
          <TextField
            onChange={handleChangeProjectName}
            label="Project name"
            variant="outlined"
            className={classes.textField}
            helperText="Write down project name"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            onChange={handleChangeProjectOverview}
            label="Project overview"
            variant="outlined"
            className={classes.textField}
            helperText="Write down few wrods to Describe the project"
            margin="dense"
            multiline
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            multiline
            onChange={handleChangeProjectBulletPoint1}
            label="Bullet point 1"
            variant="outlined"
            className={classes.textField}
            helperText="Write down bullet point for the project"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            multiline
            onChange={handleChangeProjectBulletPoint2}
            label="Bullet point 2"
            variant="outlined"
            className={classes.textField}
            helperText="Write down bullet point for the project"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            multiline
            onChange={handleChangeProjectBulletPoint3}
            label="Bullet point 3"
            variant="outlined"
            className={classes.textField}
            helperText="Write down bullet point for the project"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            multiline
            onChange={handleChangeProjectBulletPoint4}
            label="Bullet point 4"
            variant="outlined"
            className={classes.textField}
            helperText="Write down bullet point for the project"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={saveProject}
          >
            Save Project
          </Button>
        </Grid>
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
    </Grid>
  );
};

export default Form;
