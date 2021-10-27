import useFetch from "hooks/useFetch";
import { useUsers } from "state/UsersProvider";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import kickout from "assets/images/kickout.png";

export default function StudentList() {
  const { dispatchUsers } = useUsers();
  const users = useFetch("users", dispatchUsers); //TODO make dispatch return only students if possible

  const students = users.data.filter((item) => {
    return item.role === "student";
  });

  function handleDelete(event) {
    event.preventDefault();
    if (window.confirm("Are you sure ?")) {
      alert("Student deleted");
    }
  }

  // Components
  const Students = students.map((item) => {
    return (
      <li key={item.id} className="student-card">
        <h3>
          {item.username} - {item.role}
        </h3>
        <button className="btn btn-delete" onClick={handleDelete}>
          <img src={kickout} alt="out" />
          <h4>kick out</h4>
        </button>
      </li>
    );
  });
  return (
    <>
      {users.loading === true && <Spinner />}{" "}
      {users.error !== null && <BoxError />}
      {(!users.loading && users.error) === null && (
        <>
          <ul className="students">{Students}</ul>
        </>
      )}
    </>
  );
}
