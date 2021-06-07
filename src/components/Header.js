import React from "react";
import { AppBar, Grid, Typography, Button } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid item> </Grid>
        <Typography variant="h4">Resumeee</Typography>
        <Button color="inherit">Login</Button>
      </Grid>
    </AppBar>
  );
};

export default Header;
