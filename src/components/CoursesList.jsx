// NPM Packages
import { useState } from "react";

//Local Files
import useFetch from "hooks/useFetch";
import { useAuth } from "state/AuthProvider";
import { useCourses } from "state/CoursesProvider";
import { useUser } from "state/UserProvider";

import CardInTeacherPage from "./teacher/Card";
import CardInStudentPage from "./student/Card";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import MappingList from "./shared/MappingList";

export default function CoursesList() {
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);

  const { user } = useUser();
  const isTeacher = user.role === "teacher";

  console.log("CourseList", user)

  return (
    <>
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}

      {(!courses.loading && courses.error) === null && (
        <>
          {isTeacher ? (
            <MappingList Component={CardInTeacherPage} mapData={courses.data} />
          ) : (
            <MappingList Component={CardInStudentPage} mapData={courses.data} />
          )}
        </>
      )}
    </>
  );
}
