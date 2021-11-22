// Project files
import { useCourses } from "state/CoursesProvider";
import CardInStudentPage from "./CardCourse";
import MappingList from "components/shared/MappingList";

export default function CoursesList() {
  // Global state
  const { courses } = useCourses();

  return (
    <>
        <MappingList Component={CardInStudentPage} mapData={courses} />
    </>
  );
}
