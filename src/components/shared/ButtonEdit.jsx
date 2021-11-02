// NPM packages
import { RiEdit2Fill } from "react-icons/ri";

export default function ButtonEdit({handleClick}) {

  return (
    <button onClick={handleClick}>
      <h4>
        <RiEdit2Fill />
        Update
      </h4>
    </button>
  );
}
