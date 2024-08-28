import styles from "./Projects.module.css";
import project1 from "@assets/portfolio.gif";
import project2 from "@assets/restaura.gif";
import project3 from "@assets/bluekart.gif";
import project4 from "@assets/space_api.gif";
import project5 from "@assets/project5.webp";
import project6 from "@assets/animations.gif";
import { handleExternalLink } from "../../utils";
const Projects = () => {
  const stacks = ["React Js", "JavaScript", "GSAP", "Tailwind CSS"];
  const myProjects = [    {
    title: (
      <h4>
        My Personal Portfolio{" "}
        <div>
          Status: <span className="status_inprogress">In Progress</span>
        </div>
      </h4>
    ),
    description: `Designed and developed a visually engaging portfolio page to showcase my projects, achievements, and skills. The site features both dark and night modes for enhanced user customization. Incorporated Framer Motion for smooth animations, Lenis for fluid scrolling.`,
    imgURL:
     project1,
     link:"https://github.com/Cirilplackal/portfolio"
  },  {
    title: (
      <h4>
        BlueKart - an ecommerce site{" "}
        <div>
          Status: <span className="status_inprogress">In Progress</span>
        </div>
      </h4>
    ),
    description: `Designed and developed a visually engaging portfolio page to showcase my projects, achievements, and skills. The site features both dark and night modes for enhanced user customization. Incorporated Framer Motion for smooth animations, Lenis for fluid scrolling.`,
    imgURL:
     project3,
     link:"https://github.com/Cirilplackal/shopper"
  },
    {
      title: (
        <h4>
          Apple Landing Page Clone{" "}
          <div>
            Status: <span className="status_completed">Completed</span>
          </div>
        </h4>
      ),
      description: `This project is a React.js and TailwindCSS-based clone of Apple's iPhone 15 Pro website, showcasing the seamless integration of GSAP (Greensock Animations) and Three.js. The website effectively displays the iPhone 15 Pro models in various colors and shapes, delivering an engaging and interactive user experience.`,
      imgURL:
        "https://github.com/Cirilplackal/apple-clone/raw/main/preview/preview1.gif",
        link:"https://github.com/Cirilplackal/apple-clone"
    },
    {
      title: (
        <h4>
          Restaura, a restaurant website{" "}
          <div>
            Status: <span className="status_completed">Completed</span>
          </div>
        </h4>
      ),
      description: `Created a visually engaging restaurant website using React, JavaScript, Tailwind CSS, and Vite. Integrated Framer Motion for smooth animations, Lenis for fluid scrolling, and GSAP for dynamic effects. Showcased Glassmorphism for an elegant frosted glass design.`,
      imgURL: project2,
      link:"https://github.com/Cirilplackal/foodcraft"
    },

    {
      title: (
        <h4>
          Animations  <div>
            Status: <span className="status_inprogress">In Progress</span>
          </div>
        </h4>
      ),
      description: `Demonstrating advanced animation techniques and 3D visualization skills, with positive feedback on design and interactivity.
`,
      imgURL: project6,
      link:"https://github.com/Cirilplackal/animations"
    },
    {
      title: (
        <h4>
          Space Data API  <div>
            Status: <span className="status_inprogress">On hold</span>
          </div>
          </h4>
      ),
      description: `Currently developing a RESTful API using NestJS, PostgreSQL, and Swagger to manage and retrieve historical data about space flights. The ongoing project aims to create a comprehensive and accessible repository of space exploration records. `,
      imgURL: project4,
      link:"https://github.com/Cirilplackal?tab=repositories"
    }
  ];
  return (
    <div className={`${styles.projects_wrapper} section`} id="projects">
      <div className={`section_title`}>
        <h2>My Projects</h2>
        <p>
          Here you will find a collection of my most impactful work, showcasing
          my expertise in modern web development and programming. From dynamic
          single-page applications to full-stack solutions, these projects
          reflect my passion for creating efficient, scalable, and user-friendly
          experiences.
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
              <i className="ri-arrow-right-line" onClick={()=>handleExternalLink(project.link)}/>
            </div>
            <div className={styles.project_description}>
              {project.description}
            </div>
            <div
              style={{
                paddingLeft: "20px",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {stacks.map((stack) => (
                <span key={stack} className="stack">
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
