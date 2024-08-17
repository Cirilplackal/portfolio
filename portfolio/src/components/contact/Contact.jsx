import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={`${styles.contact_wrapper} section`} id="contact">
      <div className={`section_title`}>
        <h2>Contact me</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p> */}
      </div>
      <div className={styles.contact_container}>
        <div className={styles.contact_details}>
          <h4>Lets Talk about anything</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className={styles.detail}>
            <h3>
              <i className="ri-phone-line" />
              +91 94884 28991
            </h3>
            <h3>
              <i className="ri-mail-line" />
              mail.cirilplackal@gmail.com
            </h3>
            <h3>
              <i className="ri-map-pin-line" />
              Kakkanad,Kochi
            </h3>
          </div>
        </div>
        <div className={styles.contact_form}>
          <form>
            <div className={styles.input_wrapper}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
