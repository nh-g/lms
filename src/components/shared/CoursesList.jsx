// Project files
import { useCourses } from "state/CoursesProvider";
import { useUser } from "state/UserProvider";
import CardInTeacherPage from "../teacher/CardCourse";
import CardInStudentPage from "../student/CardCourse";
import MappingList from "./MappingList";

export default function CoursesList() {
  // Global state
  const { courses } = useCourses();
  const { user } = useUser();
  
  const isTeacher = user.role === "teacher";

  return (
    <>
      {isTeacher ? (
        <MappingList Component={CardInTeacherPage} mapData={courses} />
      ) : (
        <MappingList Component={CardInStudentPage} mapData={courses} />
      )}
    </>
  );
}
