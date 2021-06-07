import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

import StyledButton from "../common/StyledButton.js";
import { getTags, addTagReq } from "../../api/FormApi.js";

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const FormAddChip = ({ setTags }) => {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = (e) => {
    addTagReq({ tag: newTag }).then((res) => getTags(setTags));
    setNewTag("");
  };

  const classes = useStyles();
  return (
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
  );
};

export default FormAddChip;
