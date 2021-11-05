// NPM Packages
import {BsFillFileCodeFill} from "react-icons/bs"

export default function Links({ data }) {
  const Links = data.links.map((item) => {
    return (
      <a
        href={item.linkURL}
        rel="noreferrer"
        target="_blank"
        className="item-material"
      >
        <span class="icon">
          <BsFillFileCodeFill />
        </span>
        <span class="label"> {item.title} </span>
      </a>
    );
  });

  return (
    <div className="list-material">
      {Links}
    </div>
  );
}
