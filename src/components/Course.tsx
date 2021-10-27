//@ts-nocheck
// NPM Packages
import { useParams, Link } from "react-router-dom";

// Project files
import { getCourseById } from "scripts/courses";
import { useCourses } from "state/CoursesProvider";
import { useAuth } from "state/AuthProvider";
import Files from "./shared/Files";
import Identificator from "./shared/Identificator";
import Links from "./shared/Links";
import useFetch from "hooks/useFetch";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";

export default function Course() {
  // Global State
  const { user } = useAuth();
  //Local state
  const { courseID } = useParams();
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);
  // Constants
  const course = getCourseById(courseID, courses.data);

  return (
    <>
      <Identificator role={user.role} username={user.username} />
      <main className="page-course">
        {courses.loading === true && <Spinner />}
        {courses.error !== null && <BoxError />}
        {(!courses.loading && courses.error) === null && (
          <>
            <h2>{course.title}</h2>
            <img src={course.imageURL} alt="img" className="illustration" />
            <p className="description">{course.content}</p>
            {/* <Links data={course} /> */}
            <a
              href={course.link}
              target="_blank"
              className="links"
              rel="noreferrer"
            >
              <h4>External link ...</h4>
            </a>
            {/* <Files data={course} /> */}
            <a href={course.file} className="files" download>
              <h4>Download file ⬇</h4>
            </a>
            <Link to="/" className="btn btn-main btn-140">
              <h4>Back</h4>
            </Link>
          </>
        )}
      </main>
    </>
  );
}
