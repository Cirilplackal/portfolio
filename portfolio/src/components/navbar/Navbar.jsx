import { useRef } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const navRef = useRef();
  const menuHandler = () => {
    navRef.current.classList.toggle(styles.showMenu);
  };
  const navItems = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    // {
    //   name: "Testimonial",
    //   path: "#testimonials",
    // },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  const DarkTheme = () => {
    document.body.setAttribute("Theme", "Dark");
  };
  const LightTheme = () => {
    document.body.setAttribute("Theme", "Light");
  };

  LightTheme();
  const handleTheme = () => {
    if (document.body.getAttribute("Theme") === "Light") {
      DarkTheme();
    } else {
      LightTheme();
    }
  };
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.logo}>
        <a href="#home">C</a>
      </div>
      <ul ref={navRef}>
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.nav_buttons}>
        <i className="ri-moon-line" onClick={handleTheme} />
        <i className="ri-menu-line" onClick={menuHandler} />
      </div>
    </div>
  );
};

export default Navbar;
