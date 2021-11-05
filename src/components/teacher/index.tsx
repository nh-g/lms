// Project files
import CoursesList from "components/shared/CoursesList";
import CreateForm from "./Create";

export default function TeacherDashBoard() {

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
        <br />
        <h2>Active Courses</h2>
        <br />
        <table id="admin-table">
          <CoursesList />
        </table>
      </div>
    </div>
  );
}
