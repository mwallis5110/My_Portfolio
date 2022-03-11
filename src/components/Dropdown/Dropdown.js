import React, { useState } from "react";
import {AiFillCaretDown} from "react-icons/ai"

import EmailButton from "../EmailButton/EmailButton";
import Resume from "../../images/Mason_Wallis_Resume.pdf";

import "./Dropdown.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className="dropdownWrapper">
      <div className="contactButton" onClick={handleClick}>
        Contact Me <AiFillCaretDown />
      </div>
      <div
        className={click ? "dropMenu-clicked" : "dropMenu"}
        onMouseLeave={closeMobileMenu}
      >
        <ul>
          <li className="contactItem" onClick={closeMobileMenu}>
            <a id="linkedin" href="https://www.linkedin.com/in/masonwallis/">
              LinkedIn
            </a>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <a id="github" href="https://github.com/mwallis5110">
              Github
            </a>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <a id="resume" href={Resume} download>
              My Resumé
            </a>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <EmailButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
