import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your EmailJS service ID, template ID, and user ID
      await emailjs.send(
        import.meta.env.MAIL_SERVICE_ID,
        import.meta.env.MAIL_TEMPLATE_ID,
        formData,
        import.meta.env.MAIL_API_KEY
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", subject: "" });
    } catch (error) {
      setStatus("Failed to send message.");
      console.log(error);
    }
  };
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
            Feel free to reach out for collaboration, inquiries, or just to
            connect.
            <br /> You can contact me via,
          </p>
          <div className={styles.detail}>
            <h3>
              <i className="ri-phone-line" /> +91 94884 28991
            </h3>
            <h3>
              <i className="ri-mail-line" /> mail.cirilplackal@gmail.com
            </h3>
            <h3>
              <i className="ri-map-pin-line" /> Kakkanad,Kochi
            </h3>
          </div>
        </div>
        <div className={styles.contact_form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_wrapper}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button>Submit</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
