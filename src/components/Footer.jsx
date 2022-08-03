import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/birkan-dogan/fire-blog" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/birkandogandeveloper/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
      {/* <p> &copy; 2022 birkandogan.com </p> */}
    </div>
  );
};

export default Footer;
