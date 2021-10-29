// @ts-nocheck
import { Link } from "react-router-dom";
// import Modal from "components/shared/Modal";

interface iProps {
  data: object;
  isOpen: boolean;
}
export default function  Card({ item }:iProps) {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="card">
      {/* <Modal
        type="edit"
        data={data}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Edit course
      </Modal> */}

      <h2 className="title">{item.title}</h2>
      <p className="description">{item.description}</p>
      <img src={item.imageURL} alt="img" />

      <div className="menu">
        <Link to={"/courses/" + item.id}>
          <h3>View Course</h3>
        </Link>
      </div>
    </div>
  );
};


