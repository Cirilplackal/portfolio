import styles from "./Services.module.css";
import service1 from "@assets/uiux.png";
import service2 from "@assets/web_dev.webp";
import service3 from "@assets/web3.webp";
import service4 from "@assets/api-capa.png";
import service5 from "@assets/web_dev4.webp";
import service6 from "@assets/rocket.png";
const Services = () => {
  const myServices = [
    {
      title: "UI/UX Design",
      description: `User-centric designs are crafted to be both visually appealing and highly functional. Utilizing tools like Figma, Sketch and Draw.io, interfaces are designed to enhance user interaction and deliver a seamless experience across all devices.`,
      imgURL: service1,
    },
    {
      title: "Web Designing",
      description: `With a strong focus on modern, responsive design, technologies like HTML, CSS, and Tailwind CSS are used along with UI libraries such as Chakra UI, Ant Design, Bootstrap .etc, to craft websites that are not only aesthetically pleasing but also fully optimized for performance and usability.`,
      imgURL: service2,
    },
    {
      title: "Web Development",
      description: `Specializing in building dynamic, high-performance websites using JavaScript and TypeScript. Leveraging ReactJS, Next.js, and Vite, scalable front-end applications are developed to be fast, secure, and user-friendly.`,
      imgURL: service3,
    },
    {
      title: "API Development",
      description: `Robust RESTful APIs are designed and developed using NestJS and Django. These APIs ensure smooth and efficient communication between applications and external services, enhancing functionality and interoperability.`,
      imgURL: service4,
    },
    {
      title: "Full Stack Development",
      description: `Comprehensive full-stack development services are provided, managing both front-end and back-end aspects of projects. With expertise in ReactJS, Redux Toolkit, Next.js, and Django, combined with database management using PostgreSQL and PGAdmin, complete solutions are delivered that are robust and scalable.`,
      imgURL: service5,
    },
    {
      title: "Hosting & Deployment",
      description: `The entire deployment process is managed, ensuring applications are live and performing optimally. Using Docker for containerization and Git for version control, reliable and secure hosting environments are set up to keep applications running smoothly.`,
      imgURL: service6,
    },
  ];
  return (
    <div className={`${styles.services_wrapper} section`} id="services">
      <div className={`section_title`}>
        <h2>My Services</h2>
        <p>
          In the digital age, having a well-crafted online presence is
          essential. A comprehensive suite of services is offered, designed to
          bring ideas to life through innovative design and robust development.
          With a strong foundation in modern technologies and best practices,
          every project is tailored to meet unique needs, whether it's creating
          a dynamic website, developing a powerful API, or deploying a
          full-stack application.
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
