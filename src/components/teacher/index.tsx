//@ts-nocheck

// NPM packages
import { useState } from "react";

// Project files
import CoursesList from "components/CoursesList";
import Modal from "components/shared/Modal";

export default function Teacher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-container">
      <CoursesList />

      <button className="btn btn-main btn-300" onClick={() => setIsOpen(true)}>
        <h4>New Course</h4>
      </button>
      <Modal type="create" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        New course
      </Modal>

    </div>
  );
}
