import styles from "./Header.module.css";
import { ReactTyped } from "react-typed";
const Header = () => {
  return (
    <div className={styles.header_wrapper} id="home">
      <small>Helloo there...!!!</small>
      <h2>
        I M{" "}
        <span>
          <ReactTyped
            strings={[
              "Ciril Thomas",
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
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, 
      </p>
      <div className={styles.social}>
        <i className="ri-facebook-line" />
        <i className="ri-instagram-line" />
        <i className="ri-twitter-x-line" />
        <i className="ri-github-line" />
      </div>
      <button>
        Download CV <i className="ri-download-line" />
      </button>
    </div>
  );
};

export default Header;
