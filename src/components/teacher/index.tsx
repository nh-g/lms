// Project files
import CreateForm from "./CreateCourse";
import useFetch from "hooks/useFetch";
import { useCourses } from "state/CoursesProvider";
import Spinner from "components/shared/Spinner";
import CourseList from "./CourseList";

export default function TeacherDashBoard() {
  const path = "courses";
  const { dispatch } = useCourses();
  const { data, loading, error } = useFetch(path, dispatch);

  return (
    <div id="dashboard" className="page-container">
      <div className="page">
        <header className="header">
          <h1 className="title">Edit Page</h1>
          <p className="description">
            This is a inline editable table. Click to fill in. Auto save when
            you leave the input field.
          </p>
        </header>
        <CreateForm />
        <h2 className = "section-title">Active Courses</h2>

        {loading && <Spinner />}
        {error && <p>{error}</p>}

        <table id="admin-table">
          {data && <CourseList />}
        </table>

      </div>
    </div>
  );
}
