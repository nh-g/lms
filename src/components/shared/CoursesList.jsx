// Project files
import useFetch from "hooks/useFetch";
import { useCourses } from "state/CoursesProvider";
import { useUser } from "state/UserProvider";

import CardInTeacherPage from "../teacher/CardCourse";
import CardInStudentPage from "../student/CardCourse";
import Spinner from "./Spinner";
import BoxError from "./BoxError";
import MappingList from "./MappingList";

export default function CoursesList() {
  const { dispatch } = useCourses();
  const courses = useFetch("courses", dispatch);

  console.log("CourseList", courses);

  const { user } = useUser();
  const isTeacher = user.role === "teacher";

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
