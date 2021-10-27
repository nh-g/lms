//@ts-nocheck
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "components/shared/Modal";

interface MyProps {
  data: object;
}
const Card: FC<MyProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card">
      <Modal
        type="edit"
        data={data}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={data}
      >
        Edit course
      </Modal>
      <h2 className="title">{data.title}</h2>
      <p className="description">{data.description}</p>
      <img src={data.imageURL} alt="img" />
      <div className="menu">
        <button onClick={() => setIsOpen(true)}>
          <h3>Edit</h3>
        </button>

        <button className="btn">
          <h3>Delete</h3>
        </button>
        <Link to={"/courses/" + data.id}>
          <h3>View Course</h3>
        </Link>
      </div>
    </div>
  );
};

export default Card;
