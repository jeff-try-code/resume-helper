import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

const StyledChip = ({ label, onClick, onDelete, color }) => {
  const classes = useStyles();
  return (
    <Chip
      size="small"
      clickable
      onClick={onClick}
      color={color}
      label={label}
      onDelete={onDelete}
      className={classes.root}
    />
  );
};

export default StyledChip;
