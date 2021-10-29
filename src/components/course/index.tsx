//@ts-nocheck
// NPM Packages
import { useParams, Link } from "react-router-dom";

// Project files
import { getCourseById } from "scripts/courses";
import { useCourses } from "state/CoursesProvider";
import Files from "../shared/Files";
import Links from "../shared/Links";
import useFetch from "hooks/useFetch";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";

export default function Course() {
  const { courseID } = useParams();
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);

  const course = getCourseById(courseID, courses.data);

  return (
    <>
      <div id="course" className="page-container">
        {courses.loading === true && <Spinner />}
        {courses.error !== null && <BoxError />}

        {(!courses.loading && courses.error) === null && (
          <div className="page">
            <header className="header">
              <h1 className="title">{course.title}</h1>
              <p className="description">{course.description}</p>
            </header>
            {/* <Links data={course} /> */}
            <section className="material-section">
              <h3>Documents</h3>
              <div className="list-material">
                <a href={course.file} className="files" download>
                  <h4>Download file ⬇</h4>
                </a>
              </div>
              <h3>External Links</h3>
              <div className="list-material">
                <a
                  href={course.link}
                  target="_blank"
                  className="links"
                  rel="noreferrer"
                />
              </div>
            </section>

            <Link to="/" className="btn btn-main btn-200">
              <h4>Back to courses</h4>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
