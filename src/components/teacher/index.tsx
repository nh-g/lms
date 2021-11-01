//@ts-nocheck

// NPM packages
// import { useState } from "react";
import React, { useRef, useState } from "react";

// Project files
import CoursesList from "components/CoursesList";
import Modal from "components/teacher/Modal";

import Editable from "./Editable";
import InlineEditableTable from "./InlineEditableTable";
export default function Teacher() {
  // const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <div id="dashboard-teacher" className="page-container">
  //     <div className="page">
  //       <CoursesList />

  //       <button
  //         className="btn btn-main btn-300"
  //         onClick={() => setIsOpen(true)}
  //       >
  //         <h4>New Course</h4>
  //       </button>
  //       <Modal type="create" isOpen={isOpen} onClose={() => setIsOpen(false)}>
  //         New course
  //       </Modal>
  //     </div>
  //   </div>
  // );

  return (
    <div id="dashboard" className="page-container">
      <h1>Teacher Page</h1>
      <div className="page">
        <header className="header">
          <h1 className="title">Edit Page</h1>
          <p className="description">
            This is a inline editable table. Click to fill in. Auto save when
            you leave the input field.
          </p>
        </header>
        <InlineEditableTable />
        <br />
        <h2>Active Courses</h2>
        <div className="grid-container">
          <CoursesList />
        </div>
      </div>
    </div>
  );
}
