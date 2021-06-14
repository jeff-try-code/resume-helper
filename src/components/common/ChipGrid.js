import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import StyledChip from "./StyledChip.js";

const useStyles = makeStyles((theme) => ({
  chipGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    width: "100%",
  },
}));

const ChipGrid = ({ tags, onClick, onDelete, array }) => {
  const classes = useStyles();
  array = array || "default"
  return (
    <Grid className={classes.chipGrid}>
      {tags.map((data) => {
        return (
          <li key={data}>
            <StyledChip
              label={data}
              onClick={onClick}
              onDelete={onDelete}
              color={
                array.includes(data) ? "primary" : "default"
              }
            />
          </li>
        );
      })}
    </Grid>
  );
};

export default ChipGrid;
