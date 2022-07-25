import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaInbox, FaLinkedin, FaXing } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="mailto:werner.thomas@me.com">
        <FaInbox />
      </a>
    </div>
    <div>
      <a
        href="https://www.xing.com/profile/Thomas_Werner182"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXing />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/tomj2j/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/tomj2j"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
