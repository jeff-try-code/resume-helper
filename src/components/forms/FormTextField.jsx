import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width: "100%",
  },
  input: {
    shrink: true,
  }
}));

const FormTextField = ({label, handleChange}) => {
  const classes = useStyles()
  return (
    <TextField
      onChange={handleChange}
      label="label"
      variant="outlined"
      className={classes.root}
      margin="dense"
      InputLabelProps={{
        className: classes.input,
      }}
    />
  );
};

export default FormTextField;
