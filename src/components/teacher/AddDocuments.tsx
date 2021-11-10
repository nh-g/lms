//@ts-nocheck
// NPM Packages
import { useParams, Link } from "react-router-dom";

// Project files
import { getCourseById } from "scripts/courses";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";
import CreateDocumentForm from "./CreateDocumentForm";
import MappingList from "components/shared/MappingList";
import CardDocument from "./CardDocument";

export default function AddDocuments() {
  const { courseID } = useParams();
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);

  const course = getCourseById(courseID, courses.data);


  // console.log("links", course.links);

  // const Links = course.links.map((item, index) => {
  //     return(
  //     <tr key={index}>
  //       <td>{item.title}</td>
  //     </tr>
  //     )

  // });

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

            <h2>Add Document</h2>
            <CreateDocumentForm
              item={course}
              documentID={course.links.length}
            />
            <br />

            <h3>{course.links.length}</h3>

            <section className="material-section">
              <h2>External References</h2>
              <table id="admin-table">
                {/* {Links} */}
                <MappingList Component={CardDocument} mapData={course.links} />
              </table>

              {/* <div className="list-material">
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
              </div> */}
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
