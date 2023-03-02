import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <span>
          Made with ❤ and <b>React.js</b>.
        </span>

        <section className="social-media">
          <a href="https://github.com/birkan-dogan/fire-blog" target="_blank">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/birkandogandeveloper/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
