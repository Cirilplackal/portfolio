import styles from "./Services.module.css";
import service1 from "@assets/service1.webp";
import service2 from "@assets/service2.webp";
import service3 from "@assets/service3.webp";
import service4 from "@assets/service4.webp";
import service5 from "@assets/service5.webp";
import service6 from "@assets/service6.webp";
const Services = () => {
  const myServices = [
    {
      title: "UI/UX Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: service1,
    },
    {
      title: "Web Designing",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: service2,
    },
    {
      title: "Web Development",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: service3,
    },
    {
      title: "API Development",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: service4,
    },
    {
      title: "Full Stack Development",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: service5,
    },
    {
      title: "Hosting & Deployment",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
      imgURL: service6,
    },
  ];
  return (
    <div className={`${styles.service_wrapper} section`} id="services">
      <div className={`section_title`}>
        <h2>My Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className={styles.service_cards}>
        {myServices.map((service) => (
          <div className={styles.card} key={service.title}>
            <img src={service.imgURL} alt="service" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
