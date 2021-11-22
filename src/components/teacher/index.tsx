// // Project files
// import CreateForm from "./CreateCourse";
// import CourseList from "./CourseList";

// export default function TeacherDashBoard() {

//   return (
//     <div id="dashboard" className="page-container">
//       <div className="page">
//         <header className="header">
//           <h1 className="title">Edit Page</h1>
//           <p className="description">
//             This is a inline editable table. Click to fill in. Auto save when
//             you leave the input field.
//           </p>
//         </header>
//         <CreateForm />
//         <br />
//         <h2>Active Courses</h2>
//         <br />
//         <table id="admin-table">
//           <CourseList />
//         </table>
//       </div>
//     </div>
//   );
// }
// Project files
// import CoursesList from "components/shared/CoursesList";
import CreateForm from "./CreateCourse";
import useFetch from "hooks/useFetch";
import { useCourses } from "state/CoursesProvider";
import Spinner from "components/shared/Spinner";
import CourseList from "./CourseList";

export default function TeacherDashBoard() {
  const path = "courses";
  const { dispatch } = useCourses();
  const { data, loading, error } = useFetch(path, dispatch);

  // const CoursesList = data.map((item, index) => (
  //   <>
  //     <tr>
  //       <td>{index} </td>
  //       <CardInTeacherPage item={item} />
  //     </tr>
  //   </>
  // ));

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
          {loading && <Spinner />}
          {data && <CourseList/>}
          {error && <p>{error}</p>}
          {/* {data && CoursesList} */}

          {/* <CoursesList /> */}
        </table>
      </div>
    </div>
  );
}
