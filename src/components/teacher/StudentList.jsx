// Project files
import useFetch from "hooks/useFetch";
import { useUser } from "state/UserProvider";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";
import Delete from "../shared/Delete";

export default function StudentList() {
  const { setUser } = useUser();
  const users = useFetch("users", setUser);
  // TODO: fix fetching only students because current bug: Navigator greeting disappears.

  const students = users.data.filter((item) => {
    return item.role === "student";
  });

  const StudentList = students.map((item) => {
    return (
      <tbody>
        <tr key={item.id}>
          <td>{item.username}</td>
          <td>{item.role}</td>
          <td className="description-students ">{item.id}</td>
          <td className="admin-options">
            <Delete dataSelected={item} path="users" />
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div id="dashboard" className="page-container">
      <div className="page">
        <header className="header">
          <h1 className="title">Student List</h1>
          <p className="description">
            List of registered students. Can remove selected student by clicking Delete button. 
          </p>
        </header>

        {users.loading === true && <Spinner />}
        {users.error !== null && <BoxError />}
        {(!users.loading && users.error) === null && students.length > 0 ? (
          <>
            <table id="admin-table">
              {StudentList}
            </table>
          </>
        ) : (
          "No student to show"
        )}

      </div>
    </div>
  );
}
