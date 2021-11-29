// Project files
import { useCourses } from "state/CoursesProvider";
import CardInTeacherPage from "../teacher/CardCourse";

export default function CourseList() {
  const { courses } = useCourses();

  const List = courses.map((item, index) => (
    <tr>
      <td style={{ width: "10px" }}>{index}</td>
      <CardInTeacherPage key={item.id} item={item} />
    </tr>
  ));
  return (
    <>
      {List.length > 0 ? (
        <tbody className="table-header">
          <tr>
            <th> </th>
            <th>Title</th>
            <th>Description</th>
            <th>Admin Operation</th>
          </tr>
          {List}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td>
              <h3>Currently no content to show. Click to fill in the form...</h3>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
}
