import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navRef = useRef();
  const [theme, setTheme] = useState("Dark"); // Default to "Dark" theme

  const menuHandler = () => {
    navRef.current.classList.toggle(styles.showMenu);
  };

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const DarkTheme = () => {
    document.body.setAttribute("Theme", "Dark");
    setTheme("Dark");
  };

  const LightTheme = () => {
    document.body.setAttribute("Theme", "Light");
    setTheme("Light");
  };

  const handleTheme = () => {
    if (theme === "Light") {
      DarkTheme();
    } else {
      LightTheme();
    }
  };

  useEffect(() => {
    DarkTheme();
  }, []);

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
        <i
          className={theme === "Light" ? "ri-moon-line" : "ri-sun-line"}
          onClick={handleTheme}
        />
        <i className="ri-menu-line" onClick={menuHandler} />
      </div>
    </div>
  );
};

export default Navbar;
