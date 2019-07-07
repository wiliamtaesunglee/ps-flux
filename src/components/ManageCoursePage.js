import React from "react";
import { Prompt } from "react-router-dom";
import CoureForm from "./CourseForm";

const ManageCoursePage = props => {
  return (
    <>
      <h2>Manage Courses</h2>
      <Prompt when={true} message="Are yout sure you want to leave?" />
      <CoureForm />
    </>
  );
};

export default ManageCoursePage;
