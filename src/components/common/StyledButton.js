import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "25px",
    margin: theme.spacing(1),
  },
}));

const StyledButton = ({ text, handleClick, startIcon }) => {
  const classes = useStyles();
  return (
    <Button
    color="primary"
    variant="contained"
    startIcon={startIcon}
    className={classes.root}
    onClick={handleClick}
  >
    {text}
  </Button>
  );
};

export default StyledButton;
