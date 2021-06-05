import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width: "100%",
  },
}));

const FormTextField = ({ label, handleChange, name, value }) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      margin="dense"
      name={name}
      value={value}
      onChange={handleChange}
      label={label}
      className={classes.root}
      required
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default FormTextField;
