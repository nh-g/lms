import React from "react";

export default function Files({ data }) {
  const Files = data.files.map((item, index) => {
    return (
      <li key={item}>
        <a href={item} rel="noreferrer" target="_blank">
          <h4>Download File {index + 1}</h4>
        </a>
      </li>
    );
  });

  return (
    <div className="files">
      <ul>{Files}</ul>
    </div>
  );
}
