import CoursesList from "components/student/CoursesList";

export default function Student() {
  return (
    <div id="dashboard" className="page-container">
      <div className="page">
        <h1>Home</h1>
        <div className="grid-container">
          <CoursesList />
        </div>
      </div>
    </div>
  );
}
