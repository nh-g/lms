
import React from "react";

import LinkedIn from "assets/icons/linkedin.svg";
import GitHub from "assets/icons/github.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nh-g/"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nh-g"
          >
            <img src={GitHub} alt="" />
          </a>
        </li>
      </ul>
      <p>© 2021 • Giang N.H.</p>
    </footer>
  );
}
