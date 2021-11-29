//@ts-nocheck
// NPM Packages
import { useParams, Link } from "react-router-dom";

// Project files
import { getCourseById } from "scripts/courses";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";
import Spinner from "../../shared/Spinner";
import BoxError from "../../shared/BoxError";
import CreateDocumentForm from "./CreateResourceForm";
import MappingList from "components/shared/MappingList";
import CardDocument from "./CardResource";

export default function AddResources() {
  const { courseID } = useParams();
  const { dispatch } = useCourses();
  const courses = useFetch("courses", dispatch);
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
              <p className="description">
                This is a inline editable table. Click to fill in. Auto save
                when you leave the input field.
              </p>
            </header>

            <h2>Add Resource</h2>
            <CreateDocumentForm
              item={course}
              documentID={course.links.length}
            />
            <br />

            <section className="material-section">
              <h2>Active Resources</h2>
              <table id="admin-table">
                <MappingList Component={CardDocument} mapData={course.links} />
              </table>
            </section>

            <br />

            <Link to="/" className="btn btn-main btn-200">
              <h4>Back to courses</h4>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
