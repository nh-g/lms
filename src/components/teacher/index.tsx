// Project files
import CoursesList from "components/CoursesList";
import InlineEditableTable from "./InlineEditableTable";

export default function Teacher() {

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
        <InlineEditableTable />
        <br />
        <h2>Active Courses</h2>
        <br />
        <div className="grid-container">
          <CoursesList />
        </div>
      </div>
    </div>
  );
}
