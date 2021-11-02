// @ts-nocheck
import { Link } from "react-router-dom";

import Placeholder from 'assets/brand/holder.png'

interface iProps {
  data: object;
  isOpen: boolean;
}
export default function  Card({ item }:iProps) {

  const { id, title, imageURL} = item;

  const Image = imageURL === "" ? Placeholder : imageURL;

  return (
    <Link to={"/courses/" + id}>
      <div className="card">

        <div className="image-container">
          <img src={Image} alt="user generated content" className="image"/>
        </div>

        <div className="label">{title}</div>
      </div>
    </Link>
  );
};


