
//Local Files
import useFetch from "hooks/useFetch";
import { useCourses } from "state/CoursesProvider";
import { useUser } from "state/UserProvider";

import CardInTeacherPage from "../teacher/CardCourse";
import CardInStudentPage from "../student/CardCourse";
import Spinner from "./Spinner";
import BoxError from "./BoxError";
import MappingList from "./MappingList";

export default function CoursesList() {
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);

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