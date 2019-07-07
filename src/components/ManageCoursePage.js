import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = props => {
  return (
    <>
      <h2>Manage Courses</h2>
      <Prompt when={true} message="Are yout sure you want to leave?" />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
