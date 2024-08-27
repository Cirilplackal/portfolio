import { handleExternalLink } from "../../utils";
import { SiLeetcode } from "react-icons/si";
import styles from "./Header.module.css";
import { ReactTyped } from "react-typed";
const Header = () => {
  return (
    <div className={styles.header_wrapper} id="home">
      <small>Helloo there...!!!, Welcome to my page</small>
      <h2>Hey, I am Ciril Plackal</h2>
      <div className={styles.react_typed}>
        I Am a{" "}
        <span>
          <ReactTyped
            strings={[
              "Web Designer",
              "Web Developer",
              "Full Stack Developer",
              "Backend Developer",
              "UI Developer",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop={true}
          ></ReactTyped>
        </span>
      </div>
      <ul>
        <li>
          Experienced Front end developer with 2 years of expertise in building
          scalable web applications.
        </li>
        <li>
          Proficient in React, GSAP, Framer, Tailwind CSS, and UI libraries such
          as Ant Design,Chakra UI,Daisy UI, .etc{" "}
        </li>
        <li>
          Experienced in back-end technologies such as NestJS and Django.
          Skilled in PostgreSQL and PGAdmin
        </li>
      </ul>
      <div className={styles.social}>
        <i
          className="ri-linkedin-line"
          onClick={() =>
            handleExternalLink("https://www.linkedin.com/in/cirilplackal/")
          }
        />
        <i
          className="ri-github-line"
          onClick={() => handleExternalLink("https://github.com/Cirilplackal/")}
        />
        <i
          onClick={() =>
            handleExternalLink("https://leetcode.com/u/Cirilplackal/")
          }
        >
          <SiLeetcode />
        </i>
        <i
          className="ri-instagram-line"
          onClick={() =>
            handleExternalLink("https://instagram.com/cirilplackal")
          }
        />
        <i
          className="ri-twitter-x-line"
          onClick={() => handleExternalLink("https://twitter.com/cplackal")}
        />
      </div>
      <button onClick={()=>handleExternalLink("https://drive.google.com/drive/folders/1lm96rz2duy7vO5L_y9BxwvHB55Xd9Qq0")}>
        Download CV <i className="ri-download-line" />
      </button>
    </div>
  );
};

export default Header;
