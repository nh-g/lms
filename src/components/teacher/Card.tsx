// @ts-nocheck
import { Link } from "react-router-dom";
import Modal from "./Modal";

import Placeholder from "assets/brand/holder.png";

interface iProps {
  item: object;
}
export default function  Card({ item }:iProps) {
  // @ts-nocheck
  // const [isOpen, setIsOpen] = useState(false);

  const { id, title,  imageURL } = item;

  const Image = imageURL === "" ? Placeholder : imageURL;


  return (
    <div className="card">
      {/* <Modal
        type="edit"
        data={item}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Edit course
      </Modal> */}

      {/* <h2 className="title">{item.title}</h2>
      <p className="description">{item.description}</p>
      <img src={item.imageURL} alt="img" />
      <div className="menu">
        <button onClick={() => setIsOpen(true)}>
          <h3>Edit</h3>
        </button>

        <button className="btn">
          <h3>Delete</h3>
        </button>
        <Link to={"/courses/" + item.id}>
          <h3>View Course</h3>
        </Link>
      </div> */}
      <div className="image-container">
        <img src={Image} alt="user generated content" className="image" />
      </div>

      <div className="label">{title}</div>
      {/* <p className="description">{description}</p> */}
    </div>
  );
};


