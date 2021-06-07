import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

import FormTextField from "./forms/FormTextField.js";
import StyledButton from "./common/StyledButton.js";
import StyledChip from "./common/StyledChip.js";
import {
  getTags,
  getProjects,
  addTagReq,
  addProject,
  deleteTagReq,
} from "../api/FormApi.js";

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

const Form = ({ setProjects, setTags, tags }) => {
  const defaultProject = {
    tags: [],
    name: "",
    overview: "",
    bulletPoints: ["", "", ""],
  };
  const [newProject, setNewProject] = useState(defaultProject);
  const [newTag, setNewTag] = useState("");
  const [newProjectTags, setNewProjectTags] = useState([]);

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

  const handleDelete2 = (e) => {
    deleteTagReq({ tag: e.target.textContent }).then((res) => getTags(setTags));
    setNewProjectTags(
      newProjectTags.filter((tag) => tag !== e.target.textContent)
    );
  };

  const handleAddTag = (e) => {
    addTagReq({ tag: newTag }).then((res) => getTags(setTags));
    setNewTag("");
  };

  const selectTag2 = (e) => {
    let chip = e.target.textContent;
    if (newProject.tags.includes(chip)) {
      setNewProject({
        ...newProject,
        tags: newProject.tags.filter((tag) => tag !== chip),
      });
    } else {
      setNewProject({
        ...newProject,
        tags: [...newProject.tags, chip],
      });
    }
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
          <Grid className={classes.chipGrid}>
            {tags.map((data) => {
              return (
                <li key={data}>
                  <StyledChip
                    label={data}
                    onClick={selectTag2}
                    onDelete={handleDelete2}
                    color={
                      newProject.tags.includes(data) ? "primary" : "default"
                    }
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
            <StyledButton
              text={"Tag"}
              handleClick={handleAddTag}
              startIcon={<AddIcon />}
            />
          </Grid>
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
