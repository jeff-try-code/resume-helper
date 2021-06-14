import React, { useState } from "react";

import ChipGrid from "../common/ChipGrid.js";
import FormAddChip from "./FormAddChip.js";
import { getTags, deleteTagReq } from "../../api/FormApi.js";


const FormChips = ({ newProject, setNewProject, setTags, tags }) => {
  const [newProjectTags, setNewProjectTags] = useState([]);

  const handleDelete = (e) => {
    let deletedTag = (e.currentTarget.parentNode.children[0].textContent)
    deleteTagReq({ tag: deletedTag }).then((res) => getTags(setTags));
    setNewProjectTags(
      newProjectTags.filter((tag) => tag !== deletedTag)
    );
  };

  const selectTag = (e) => {
    let chip = e.target.textContent;
    if (newProject.tags.includes(chip)) {
      setNewProject({
        ...newProject,
        tags: newProject.tags.filter((tag) => tag !== chip),
      });
    } else {
      setNewProject({
        ...newProject,
        tags: [...newProject.tags, chip],
      });
    }
  };
  return (
    <>
      <ChipGrid
        tags={tags}
        onClick={selectTag}
        onDelete={handleDelete}
        array={newProject.tags}
      />
      <FormAddChip setTags={setTags} />
    </>
  );
};

export default FormChips;
