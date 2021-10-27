//NPM Packages
import { useState } from "react";

//Local Files
import useFetch from "hooks/useFetch";
import { useCourses } from "state/CoursesProvider";
import Card from "./shared/Card";
import Modal from "./shared/Modal";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";

export default function CoursesList() {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);

  //Components
  const Courses = courses.data.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  return (
    <>
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}

      {(!courses.loading && courses.error) === null && (
        <section className="cards">
          {Courses}
          <button
            className="btn btn-main btn-300"
            onClick={() => setIsOpen(true)}
          >
            <h4>New Course</h4>
          </button>
          <Modal type="create" isOpen={isOpen} onClose={() => setIsOpen(false)}>
            New course
          </Modal>
        </section>
      )}
    </>
  );
}
