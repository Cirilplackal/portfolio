import styles from "./About.module.css";
import aboutImage from "@assets/about-bg.jpg";
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
  return (
    <div className={`${styles.about_wrapper} section`} id="about">
      <div className={`section_title`}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <div className={styles.about}>
          <div className={styles.about_image}>
            <img src={aboutImage} alt="img-about" />
          </div>
          <div className={styles.about_content}>
            <h3>Hello, I am Ciril Thomas, Based in India</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div className={styles.details}>
              <div className={styles.detail}>
                <p>
                  <strong>Phone No : </strong>+91 94884 28991
                </p>
                <p>
                  <strong>Email : </strong>mail.cirilplackal@gmail.com
                </p>
                <p>
                  <strong>Address : </strong>7D, Santhi Cyberdale, Near
                  Infopark, Kakkanad,Kochi
                </p>
              </div>
              <div className={styles.detail}>
                <p>
                  <strong>Nationality : </strong>Indian
                </p>
                <p>
                  <strong>Username : </strong>cirilplackal
                </p>
                <p>
                  <strong>Status : </strong>Available
                </p>
              </div>
            </div>
            <button className={styles.about_button}>See more..</button>
          </div>
        </div>
        <div className={styles.experience_counters}>
          {experienceCounters.map((experience) => (
            <div className={styles.experience_counter} key={experience.label}>
              <h2>
                <span>+{experience.count} </span>
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
