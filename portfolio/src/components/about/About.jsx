import styles from "./About.module.css";
import aboutImage from "@assets/about-bg.jpg";
import useLenis from "@hooks/useLenis";
import{skills} from "../../constants"
const About = () => {
  const experienceCounters = [
    {
      label: "Projects Completed",
      count: 6,
    },
    {
      label: "Years of Experience",
      count: 2,
    },
    {
      label: "Happy Customers",
      count: 10,
    },
    {
      label: "Award Winnings",
      count: 5,
    },
  ];

  const workExperience = [
    {
      title: "Full Stack Engineer",
      duration: "2022 - Present",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      ),
    },
    {
      title: "Zonal Head",
      duration: "2019 - 2021",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      ),
    },
    {
      title: "Community Lead",
      duration: "2020 - 2022",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      ),
    },
  ];

  const educationalQualifications = [
    {
      title: "Bachelor of Technology, Computer Science and Engineering",
      duration: "2018 - 2022",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      ),
    },
    {
      title: "HSC, (PCMB)",
      duration: "2014 - 2016",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      ),
    },
  ];
  // useLenis();
  return (
    <div className={`${styles.about_wrapper} section`} id="about">
      <div className={`section_title`}>
        <h2>About me</h2>
        <div className={styles.about_section}>
          <div>
            <h3>I am a Full-Stack Developer</h3>
            <p>
              I specialize in creating robust, scalable, and user-friendly
              applications using a diverse set of technologies. My expertise
              spans across <span>NestJS, ReactJS, PostgreSQL, Django</span>, and
              <span>{" "}more</span>, enabling me to deliver comprehensive solutions that meet
              modern web development needs.
            </p>
          </div>
          <div>
            <h3>Development Practices</h3>
            <p>
              Throughout my career, I have embraced agile development practices,
              focusing on performance optimization, API development, and
              efficient bug tracking. My projects often involve integrating
              modern UI/UX frameworks to ensure a seamless and intuitive user
              experience.
            </p>
          </div>

          <div>
            <h3>Leadership & Volunteering</h3>
            <p>
              Beyond technical skills, I have a strong background in leadership
              and community engagement. During my college years, I actively
              participated in various campus communities, taking on significant
              roles that honed my leadership and teamwork abilities.
              Volunteering has always been a passion of mine, allowing me to
              give back to the community while developing soft skills that
              complement my technical expertise.
            </p>
          </div>

          <div>
            <h3>Career Goals</h3>
            <p>
              My goal is to continuously evolve as a developer, leveraging my
              skills to contribute to innovative projects and drive positive
              change in the tech industries.
            </p>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.about_image}>
            <img
              src={
                "https://media.istockphoto.com/id/1049422504/photo/with-crossed-arms-confident-and-serious.jpg?s=1024x1024&w=is&k=20&c=HN-vqfhTfHfjLmxLfH515ncqK_DIlscfT2uPsojXFVs="
              }
              alt="img-about"
            />
          </div>
          <div className={styles.about_content}>
            <div>
              <h2>Technical Proficiencies</h2>
              <ul>
                <li>
                  <strong>Frontend:</strong> ReactJS, Ant Design, Tailwind CSS,
                  DaisyUI, JavaScript, TypeScript
                </li>
                <li>
                  <strong>Backend:</strong> NestJS, Django, REST APIs
                </li>
                <li>
                  <strong>Database:</strong> SQL, PostgreSQL
                </li>
                <li>
                  <strong>Tools & Technologies:</strong> Vite, Docker, Git,
                  VSCode
                </li>
              </ul>
            </div>
            <h3>Technical Proficiencies</h3>
            <div style={{ display: "flex",flexWrap:"wrap", gap: "15px" }}>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <img src={skill.imageUrl} style={{ width: "50px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.experience_counters}>
          {experienceCounters.map((experience) => (
            <div className={styles.experience_counter} key={experience.label}>
              <h2>
                <span>{experience.count}+</span>
                {experience.label}
              </h2>
            </div>
          ))}
        </div>
        <div className={styles.qualifications}>
          <div className={styles.experience_wrapper}>
            <h2>My Experience</h2>
            {workExperience.map((experience) => (
              <div className={styles.experience} key={experience.title}>
                <h3>
                  <i className="ri-briefcase-line" /> {experience.title}
                </h3>
                <small>{experience.duration}</small>
                {experience.description}
              </div>
            ))}
          </div>
          <div className={styles.educations_wrapper}>
            <h2>Education</h2>
            {educationalQualifications.map((qualification) => (
              <div className={styles.qualification} key={qualification.title}>
                <h3>
                  <i className="ri-graduation-cap-line" /> {qualification.title}
                </h3>
                <small>{qualification.duration}</small>
                {qualification.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
