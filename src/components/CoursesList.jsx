// NPM Packages
import { useState } from "react";

//Local Files
import useFetch from "hooks/useFetch";
import { useCourses } from "state/CoursesProvider";
import Card from "./shared/Card";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";

export default function CoursesList() {
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
        </section>
      )}
    </>
  );
}
