import styles from "./About.module.css";
import aboutImage from "@assets/about-bg.jpg";
import useLenis from "@hooks/useLenis";
import profile from "@assets/profile_pic.png";
import { skills } from "../../constants";
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
      label: "Certifications",
      count: 3,
    },
    {
      label: "Award Winnings",
      count: 2,
    },
  ];

  const workExperience = [
    {
      title: "Full Stack Engineer | Qburst Technologies, Kochi, India",
      duration: "2022 - Present",
      description: (
        <p>
          Collaborated in the development of a resource management platform from
          scratch, working closely with cross-functional teams in an Agile
          environment. Integrated over 80 API endpoints to enhance system
          reliability and performance. Developed RESTful API endpoints for
          features like email notifications and resource tracking, and
          implemented role-based access control for secure data management.
          Contributed to advanced filtering, pagination, and search
          functionalities to improve data access. Engaged in bug tracking, unit
          testing, and code reviews, and supported continuous deployments with
          detailed release documentation.
        </p>
      ),
    },
    {
      title: "Community Lead | Google Developer Students Club",
      duration: "2020 - 2022",
      description: (
        <p>
          Led the Google Developer Student Clubs at Vidya Academy, managing a
          community of 150+ students. Organized and conducted workshops to
          enhance technical skills and promote a collaborative learning
          environment.
        </p>
      ),
    },
    {
      title: "Zonal Head | GTech μLearn, Kerala, India",
      duration: "2019 - 2021",
      description: (
        <p>
          Managed and led a community of over 20,000 students across 100+
          colleges in Kerala, coordinating and executing events and initiatives
          across six districts to foster technical and professional growth among
          members.
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
          Pursued a B.Tech in Computer Science and Engineering from Vidya
          Academy of Science and Technology, affiliated with{" "}
          <span className="highlight">
            APJ Abdul Kalam Kerala Technological University (KTU)
          </span>
          . Actively participated in initiatives like Google Developer Student
          Clubs, IEDC, Tinkerhub, and Mulearn. Coordinated the 2022 Techfest and
          a Cybersecurity workshop, earning recognition with awards such as{" "}
          <span className="highlight">Top Contributor Award 2022</span> (CSE
          Department) and <span className="highlight">Star Performer</span>{" "}
          (MPower Compass Training Program 2021). Served as department treasurer
          and worked on notable projects, including a final year{" "}
          <span className="highlight">
            AI Assistant for the visually impaired
          </span>{" "}
          and a design project, Digital Classroom, built with the MERN stack.
          Completed courses in{" "}
          <span className="highlight">Robotics and IoT</span> and attended a{" "}
          <span className="highlight">Data Science workshop</span> to further
          enhance technical expertise.{" "}
        </p>
      ),
    },
    {
      title: "HSC, (PCMB)",
      duration: "2014 - 2016",
      description: (
        <p>
          Completed higher secondary education with a focus on Physics,
          Chemistry, Mathematics, and Biology in the Tamil Nadu State Board.
          Actively participated in extracurricular activities, including the
          Junior Red Cross and National Service Scheme (NSS).
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
              <span> more</span>, enabling me to deliver comprehensive solutions
              that meet modern web development needs.
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
            <img src={profile} alt="img-about" />
          </div>
          <div className={styles.about_content}>
            <h2>Technical Proficiencies</h2>
<div className={styles.tech_container}>            <ul>
<li>
  <strong>Frontend:</strong> ReactJS, Ant Design, Tailwind CSS,
  DaisyUI, JavaScript, TypeScript
</li>
<div
  style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
></div>
<li>
  <strong>Backend:</strong> NestJS, Django, REST APIs
</li>
<div
  style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
></div>
<li>
  <strong>Database:</strong> SQL, PostgreSQL
</li>
<div
  style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
></div>
<li>
  <strong>Tools & Technologies:</strong> Vite, Docker, Git, VSCode
</li>
</ul><p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=cirilplackal&show_icons=true&locale=en&layout=pie" alt="cirilplackal" /></p></div>
            {/* <div>
              <div>
                <span>Front End</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                  {skills.map((skill) => (
                    <div key={skill.name} className="tech_icons">
                      <img src={skill.imageUrl} style={{ width: "25px" }} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span>Front End</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                  {skills.map((skill) => (
                    <div key={skill.name} className="tech_icons">
                      <img src={skill.imageUrl} style={{ width: "25px" }} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span>Front End</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                  {skills.map((skill) => (
                    <div key={skill.name} className="tech_icons">
                      <img src={skill.imageUrl} style={{ width: "25px" }} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span>Front End</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                  {skills.map((skill) => (
                    <div key={skill.name} className="tech_icons">
                      <img src={skill.imageUrl} style={{ width: "25px" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            {/* <div className={styles.github_status}>
              {" "}
              <div>
                <img
                  align="left"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=cirilplackal"
                  alt="your-username"
                />
              </div>
              <div>
                <img
                  align="left"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=cirilplackal&hide=html,css&layout=compact"
                  alt="your-username"
                />
              </div>
            </div> */}
          </div>         

        </div>
        <div className={styles.experience_counters}>
          {experienceCounters.map((experience) => (
            <div className={styles.experience_counter} key={experience.label}>
              <h2 className>
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
