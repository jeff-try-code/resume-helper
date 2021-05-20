import React, { useState, useEffect } from "react";
import { Grid, FormControl, Paper, Button, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

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

const AddProject = ({tags}) => {

  const [newProjectTags, setNewProjectTags] = useState([]);

  const selectTag = (chip) => {
    if (newProjectTags.includes(chip)) {
      setNewProjectTags(newProjectTags.filter((tag) => tag !== chip));
    } else {
      setNewProjectTags([...newProjectTags, chip]);
    }
  };

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid item container className={classes.grid}>
        <Grid className={classes.chipGrid}>
          {tags.map((data) => {
            return (
              <li key={data}>
                <Chip
                  size="small"
                  color={newProjectTags.includes(data) ? "primary" : "default"}
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
          label="Project overview"
          variant="outlined"
          className={classes.textField}
          helperText="Write down few wrods to Describe the project"
          margin="dense"
          multiline
          rows={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
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
          label="Bullet point 4"
          variant="outlined"
          className={classes.textField}
          helperText="Write down bullet point for the project"
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" className={classes.button}>
          Save Project
        </Button>
      </Grid>
    </Paper>
  );
};

export default AddProject;
