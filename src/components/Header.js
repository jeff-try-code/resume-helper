import React from "react";
import { AppBar, Grid, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
      >
        <Typography variant="h4">Resumeee</Typography>
      </Grid>
    </AppBar>
  );
};

export default Header;
