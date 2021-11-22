// NPM Packages
import { RiDeleteBinLine } from "react-icons/ri";

// Project files
import { deleteDocument } from "scripts/fireStore";
import { useCourses } from "state/CoursesProvider";

export default function Delete({ dataSelected, path }) {
  function handleDelete() {
    if (window.confirm("Are you sure ?")) {
      deleteDocument(path, dataSelected.id);
      alert(`Successfully deleted ${dataSelected.title}`);
      window.location.reload(false);

      // dispatch({ type: "DELETE_COURSE", payload: dataSelected });
    }
  }

  return (
    <button disabled={dataSelected === ""} onClick={handleDelete}>
      <h4>
        <RiDeleteBinLine />
        Delete
      </h4>
    </button>
  );
}
