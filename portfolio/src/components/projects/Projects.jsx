import styles from "./Projects.module.css";
import project1 from "@assets/project1.webp";
import project2 from "@assets/project2.webp";
import project3 from "@assets/project3.webp";
import project4 from "@assets/project4.webp";
import project5 from "@assets/project5.webp";
import project6 from "@assets/project6.webp";
const Projects = () => {
  const myProjects = [
    {
      title: (
        <h4>
          Landing Page <span>Landing Design, ReactJS JavaScript</span>
        </h4>
      ),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: project1,
    },
    {
      title: (
        <h4>
          Food Order App <span>UI/UX, ReactJS JavaScript</span>
        </h4>
      ),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: project2,
    },
    {
      title: (
        <h4>
          Records API <span>Nest JS,TypeScript,JavaScript</span>
        </h4>
      ),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: project3,
    },
    {
      title: (
        <h4>
          ECommerce App <span>UI/UX, ReactJS JavaScript</span>
        </h4>
      ),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: project4,
    },
    {
      title: (
        <h4>
          Expense Tracker App <span>UI/UX, ReactJS JavaScript</span>
        </h4>
      ),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: project5,
    },
    {
      title: (
        <h4>
          Youtube Clone <span>UI/UX, ReactJS JavaScript</span>
        </h4>
      ),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: project6,
    },
  ];
  return (
    <div className={`${styles.projects_wrapper} section`} id="projects">
      <div className={`section_title`}>
        <h2>My Projects</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className={styles.projects_cards}>
        {myProjects.map((project) => (
          <div className={styles.project_card} key={project.imgURL}>
            <div className={styles.project_img}>
              <img src={project.imgURL} alt={"project"} />
            </div>
            <div className={styles.project_content}>
              {project.title}
              <i className="ri-arrow-right-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
