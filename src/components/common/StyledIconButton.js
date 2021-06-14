import React from "react";
import { IconButton } from "@material-ui/core";

const StyledIconButton = ({ label, icon, handleClick}) => {
  return (
    <IconButton
    color="primary"
    aria-label={label}
    onClick={handleClick}
  >
    {icon}
  </IconButton>
  );
};

export default StyledIconButton;
